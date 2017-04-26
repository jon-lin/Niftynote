import { RECEIVE_NOTEBOOKS, RECEIVE_NOTEBOOK, REMOVE_NOTEBOOK } from '../actions/notebooks_actions';
import merge from 'lodash/merge';

export const notebooksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTEBOOKS:
      return action.notebooks;
    case RECEIVE_NOTEBOOK:
      return merge({}, state, {[action.notebook.id]: action.notebook});
    case REMOVE_NOTEBOOK:
       let copyState = merge({}, state);
       delete copyState[action.notebook.id];
       return copyState;
    default:
      return state;
  }
};
