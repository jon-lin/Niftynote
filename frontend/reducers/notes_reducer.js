import { RECEIVE_NOTES, RECEIVE_NOTE } from '../actions/notes_actions';
import merge from 'lodash/merge';

export const notesReducer = (state = {}, action) => {
  debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTES:
      return action.notes;
    case RECEIVE_NOTE:
      debugger
      return merge({}, state, { [action.note.id]: action.note });
    default:
      return state;
  }
};
