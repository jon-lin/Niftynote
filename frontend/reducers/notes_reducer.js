import { RECEIVE_NOTES, RECEIVE_NOTE } from '../actions/notes_actions';
import merge from 'lodash/merge';
import { notesSelector } from './selectors';

export const notesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTES:
      return merge({}, state, notesSelector(action.notes));
    // case RECEIVE_NOTE:
    //   return merge({}, state, { notes: { action.note.id: { action.note } } });
    default:
      return state;
  }
};
