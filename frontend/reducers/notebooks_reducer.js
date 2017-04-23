import { RECEIVE_NOTEBOOKS } from '../actions/notebooks_actions';
import merge from 'lodash/merge';

export const notebooksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTEBOOKS:
      return merge({}, state, action.notebooks);
    default:
      return state;
  }
};
