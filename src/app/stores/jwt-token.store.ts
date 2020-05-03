import { Action, createFeatureSelector, createSelector } from '@ngrx/store';

export const SET_TOKEN = '[Jwt Token] SET_TOKEN';
export const REMOVE_TOKEN = '[Jwt Token] REMOVE_TOKEN';

export class SetToken implements Action {
  readonly type = SET_TOKEN;
  constructor(public token: string) {}
}
export class RemoveToken implements Action {
  readonly type = REMOVE_TOKEN;
}

export type All = SetToken | RemoveToken;

export interface State {
  token: string;
}
export const initialState = {
  token: localStorage.getItem('jwt-token'),
};

export const selectFeature = createFeatureSelector<State>('jwtToken');
export const selectToken = createSelector(
  selectFeature,
  s => s.token
);

export function reducer(state: State = initialState, action: All): State {
  switch (action.type) {
    case SET_TOKEN: {
      const token = action.token;
      localStorage.setItem('jwt-token', token);
      return { token };
    }
    case REMOVE_TOKEN: {
      localStorage.removeItem('jwt-token');
      return { token: null };
    }
    default: {
      return state;
    }
  }
}
