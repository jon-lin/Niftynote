import { RECEIVE_NOTE } from '../actions/notes_actions';

export const currentNoteReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTE:
      debugger
      return action.note
    default:
      return state;
  }
};
