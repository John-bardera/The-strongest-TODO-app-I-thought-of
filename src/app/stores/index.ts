import { ActionReducerMap } from '@ngrx/store';
import * as fromJwtToken from './jwt-token.store';

export interface AppState {
  jwtToken: fromJwtToken.State;
}
export const reducers: ActionReducerMap<AppState> = {
  jwtToken: fromJwtToken.reducer,
};
