import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, DocumentChangeAction } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { Observable, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Task } from '@/models';
import { AppState } from '@/stores';
import { setTasks } from '@/stores/task.store';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private userDoc: AngularFirestoreDocument<any>;

  constructor(private store: Store<AppState>, firestore: AngularFirestore) {
    this.userDoc = firestore.collection('users').doc('HfmHKW1xdw7J31aPCmpW');
  }

  getTasks(): Observable<Task[]> {
    return this.userDoc
      .collection<Task>('tasks')
      .snapshotChanges()
      .pipe(
        this.mapTask(),
        tap((tasks) => this.store.dispatch(setTasks({ tasks })))
      );
  }

  addTask(task: Task) {
    return this.userDoc.collection<Task>('tasks').add(task);
  }

  // DocumentChangeAction[] -> Task[] with id
  private mapTask() {
    return pipe(
      map<DocumentChangeAction<Task>[], Task[]>((actions) => {
        return actions.map((a) => ({
          id: a.payload.doc.id,
          ...a.payload.doc.data(),
        }));
      })
    );
  }
}
