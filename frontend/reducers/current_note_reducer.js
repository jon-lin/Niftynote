import { RECEIVE_NOTE, REMOVE_NOTE, RESET_CURRENT_NOTE } from '../actions/notes_actions';

export const currentNoteReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTE:
      return action.note;
    case REMOVE_NOTE:
      return {};
    case RESET_CURRENT_NOTE:
      return {};
    default:
      return state;
  }
};
