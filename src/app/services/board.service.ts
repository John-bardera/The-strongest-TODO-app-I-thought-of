import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { Observable, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import * as firebase from 'firebase/app';

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
      this.mapBoard(),
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

  // DocumentChangeAction[] -> Board[] with id
  private mapBoard() {
    return pipe(
      map<DocumentChangeAction<Board>[], Board[]>((actions) => {
        return actions.map((a) => ({
          id: a.payload.doc.id,
          ...a.payload.doc.data(),
        }));
      }),
      this.timestampToDate()
    );
  }

  private timestampToDate(...columns: string[]) {
    return pipe(
      map<Board[], Board[]>((boards) =>
        boards.map((board) => {
          [...columns, 'createdAt', 'updatedAt'].forEach((column) => {
            if (board[column] instanceof firebase.firestore.Timestamp) {
              board[column] = board[column].toDate();
            }
          });
          return board;
        })
      )
    );
  }
}
