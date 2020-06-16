import { Action, createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';

import { Task } from '@/models';

export const setTasks = createAction('[Task] Set tasks', props<{ tasks: Task[] }>());

export class State {
  tasks: { [id: string]: Task };
  taskIds: string[];
}
const initialState: State = {
  tasks: {},
  taskIds: [],
};

export const selectFeature = createFeatureSelector<State>('task');
export const getTasks = createSelector(selectFeature, (state) => {
  if (state.taskIds) {
    return state.taskIds.map((id) => state.tasks[id]);
  } else {
    return [];
  }
});

const taskReducer = createReducer(
  initialState,
  on(setTasks, (state, { tasks }) => {
    const newTasks = { ...state.tasks };
    const taskIds = tasks.map((team) => team.id);
    tasks.forEach((team) => {
      newTasks[team.id] = team;
    });
    return { ...state, tasks: newTasks, taskIds };
  })
);

export function reducer(state: State, action: Action) {
  return taskReducer(state, action);
}