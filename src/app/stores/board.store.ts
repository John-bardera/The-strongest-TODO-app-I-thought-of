import { Action, createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';

import { Board } from '@/models';

export const setBoards = createAction('[Board] Set boards', props<{ boards: Board[] }>());

export class State {
  boards: { [id: string]: Board };
  boardIds: string[];
}
const initialState: State = {
  boards: {},
  boardIds: [],
};

export const selectFeature = createFeatureSelector<State>('board');
export const getBoards = createSelector(selectFeature, (state) => {
  if (state.boardIds) {
    return state.boardIds.map((id) => state.boards[id]);
  } else {
    return [];
  }
});

const boardReducer = createReducer(
  initialState,
  on(setBoards, (state, { boards }) => {
    const newBoards = { ...state.boards };
    const boardIds = boards.map((team) => team.id);
    boards.forEach((team) => {
      newBoards[team.id] = team;
    });
    return { ...state, boards: newBoards, boardIds };
  })
);

export function reducer(state: State, action: Action) {
  return boardReducer(state, action);
}
