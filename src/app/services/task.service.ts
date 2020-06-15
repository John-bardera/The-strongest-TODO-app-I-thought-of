import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentChangeAction,
} from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { Observable, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import * as firebase from 'firebase/app';

import { Task } from '@/models';
import { AppState } from '@/stores';
import { setTasks } from '@/stores/task.store';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private userDoc: AngularFirestoreDocument<Task>;

  constructor(private store: Store<AppState>, firestore: AngularFirestore) {
    this.userDoc = firestore.collection('users').doc('USER_ID_TEMPORARY');
  }

  getTasks(boardId: string): Observable<Task[]> {
    return this.getTaskCollection(boardId)
      .snapshotChanges()
      .pipe(
        this.mapTask(),
        tap((tasks) => this.store.dispatch(setTasks({ tasks })))
      );
  }

  addTask(boardId: string, task: Task) {
    task.createdAt = firebase.firestore.FieldValue.serverTimestamp();
    task.updatedAt = firebase.firestore.FieldValue.serverTimestamp();

    return this.getTaskCollection(boardId).add(task);
  }

  updateTask(boardId: string, task: Task) {
    task.updatedAt = firebase.firestore.FieldValue.serverTimestamp();

    return this.getTaskCollection(boardId).doc(task.id).update(task);
  }

  complete(boardId: string, taskId: string) {
    return this.getTaskCollection(boardId).doc(taskId).update({ isDone: true });
  }

  deleteTask(boardId: string, taskId: string) {
    return this.getTaskCollection(boardId).doc(taskId).delete();
  }

  private getTaskCollection(boardId: string): AngularFirestoreCollection<Task> {
    return this.userDoc.collection<Task>('tasks', (ref) => ref.where('boardId', '==', boardId));
  }

  // DocumentChangeAction[] -> Task[] with id
  private mapTask() {
    return pipe(
      map<DocumentChangeAction<Task>[], Task[]>((actions) => {
        return actions.map((a) => ({
          id: a.payload.doc.id,
          ...a.payload.doc.data(),
        }));
      }),
      this.timestampToDate('period')
    );
  }

  private timestampToDate(...columns: string[]) {
    return pipe(
      map<Task[], Task[]>((tasks) =>
        tasks.map((task) => {
          [...columns, 'createdAt', 'updatedAt'].forEach((column) => {
            if (task[column] instanceof firebase.firestore.Timestamp) {
              task[column] = task[column].toDate();
            }
          });
          return task;
        })
      )
    );
  }
}
