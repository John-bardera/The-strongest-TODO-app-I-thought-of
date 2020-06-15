import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
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
  private baseDoc: AngularFirestoreCollection<Task>;

  constructor(private store: Store<AppState>, firestore: AngularFirestore) {
    this.baseDoc = firestore.collection('users').doc('USER_ID_TEMPORARY').collection<Task>('tasks');
  }

  getTasks(): Observable<Task[]> {
    return this.baseDoc.snapshotChanges().pipe(
      this.mapTask(),
      tap((tasks) => this.store.dispatch(setTasks({ tasks })))
    );
  }

  addTask(task: Task) {
    task.createdAt = firebase.firestore.FieldValue.serverTimestamp();
    task.updatedAt = firebase.firestore.FieldValue.serverTimestamp();

    return this.baseDoc.add(task);
  }

  updateTask(task: Task) {
    task.updatedAt = firebase.firestore.FieldValue.serverTimestamp();

    return this.baseDoc.doc(task.id).update(task);
  }

  complete(taskId: string) {
    return this.baseDoc.doc(taskId).update({ isDone: true });
  }

  deleteTask(taskId: string) {
    return this.baseDoc.doc(taskId).delete();
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
      map<Task[], Task[]>(tasks =>
        tasks.map(task => {
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
