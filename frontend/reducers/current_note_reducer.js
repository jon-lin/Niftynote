import { RECEIVE_NOTE, REMOVE_NOTE } from '../actions/notes_actions';

export const currentNoteReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTE:
      return action.note;
    case REMOVE_NOTE:
      return {};
    default:
      return state;
  }
};
