import { ActionReducerMap } from '@ngrx/store';

import * as fromBoard from './board.store';
import * as fromJwtToken from './jwt-token.store';
import * as fromTask from './task.store';

export interface AppState {
  board: fromBoard.State;
  jwtToken: fromJwtToken.State;
  task: fromTask.State;
}
export const reducers: ActionReducerMap<AppState> = {
  board: fromBoard.reducer,
  jwtToken: fromJwtToken.reducer,
  task: fromTask.reducer,
};
