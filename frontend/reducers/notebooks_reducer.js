import { RECEIVE_NOTEBOOKS, RECEIVE_NOTEBOOK } from '../actions/notebooks_actions';
import merge from 'lodash/merge';

export const notebooksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTEBOOKS:
      return action.notebooks;
    case RECEIVE_NOTEBOOK:
      return merge({}, state, {[action.notebook.id]: action.notebook});
    default:
      return state;
  }
};
