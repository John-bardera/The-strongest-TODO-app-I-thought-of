import { ActionReducerMap } from '@ngrx/store';

import * as fromJwtToken from './jwt-token.store';
import * as fromTask from './task.store';

export interface AppState {
  jwtToken: fromJwtToken.State;
  task: fromTask.State;
}
export const reducers: ActionReducerMap<AppState> = {
  jwtToken: fromJwtToken.reducer,
  task: fromTask.reducer,
};
