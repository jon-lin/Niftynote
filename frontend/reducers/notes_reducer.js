import { RECEIVE_NOTES, RECEIVE_NOTE, REMOVE_NOTE } from '../actions/notes_actions';
import merge from 'lodash/merge';

export const notesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTES:
      return action.notes;
    case RECEIVE_NOTE:
      return merge({}, state, { [action.note.id]: action.note });
    case REMOVE_NOTE:
      let copyState = merge({}, state);
      delete copyState[action.note.id];
      return copyState;
    default:
      return state;
  }
};
