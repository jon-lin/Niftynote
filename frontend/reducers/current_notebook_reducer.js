import { RECEIVE_NOTEBOOK, REMOVE_NOTEBOOK } from '../actions/notebooks_actions';

export const currentNotebookReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTEBOOK:
      return action.notebook;
    case REMOVE_NOTEBOOK:
      return {};
    default:
      return state;
  }
};
