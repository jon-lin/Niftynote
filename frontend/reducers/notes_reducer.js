import { RECEIVE_NOTES, RECEIVE_NOTE } from '../actions/notes_actions';
import merge from 'lodash/merge';

export const notesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTES:
      return merge({}, state, action.notes);
    // case RECEIVE_NOTE:
    //   return merge({}, state, { notes: { action.note.id: { action.note } } });
    default:
      return state;
  }
};
