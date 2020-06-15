import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import * as firebase from 'firebase/app';

import { actionsToModels } from '@/libs/firestore-pipes';
import { Board } from '@/models';
import { AppState } from '@/stores';
import { setBoards } from '@/stores/board.store';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private baseDoc: AngularFirestoreCollection<Board>;

  constructor(private store: Store<AppState>, firestore: AngularFirestore) {
    this.baseDoc = firestore.collection('users').doc('USER_ID_TEMPORARY').collection<Board>('boards');
  }

  getBoards(): Observable<Board[]> {
    return this.baseDoc.snapshotChanges().pipe(
      actionsToModels<Board>(),
      tap((boards) => this.store.dispatch(setBoards({ boards })))
    );
  }

  addBoard(board: Board) {
    board.createdAt = firebase.firestore.FieldValue.serverTimestamp();
    board.updatedAt = firebase.firestore.FieldValue.serverTimestamp();

    return this.baseDoc.add(board);
  }

  updateBoard(board: Board) {
    board.updatedAt = firebase.firestore.FieldValue.serverTimestamp();

    return this.baseDoc.doc(board.id).update(board);
  }

  archive(boardId: string) {
    return this.baseDoc.doc(boardId).update({ isArchive: true });
  }

  deleteBoard(boardId: string) {
    return this.baseDoc.doc(boardId).delete();
  }
}
