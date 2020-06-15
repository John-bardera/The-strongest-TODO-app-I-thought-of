import { DocumentChangeAction } from '@angular/fire/firestore';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import * as firebase from 'firebase/app';

// DocumentChangeAction[] -> Model[] with id
export function actionsToModels<T>() {
  return pipe(
    map<DocumentChangeAction<T>[], T[]>((actions) => {
      return actions.map((a) => ({
        id: a.payload.doc.id,
        ...a.payload.doc.data(),
      }));
    }),
    timestampToDate<T>()
  );
}

// map timestamp columns to Date
function timestampToDate<T>(...columns: string[]) {
  return pipe(
    map<T[], T[]>((boards) =>
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
