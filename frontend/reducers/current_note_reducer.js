import { RECEIVE_NOTE, REMOVE_NOTE, RESET_CURRENT_NOTE } from '../actions/notes_actions';
import { RECEIVE_INDIVIDUAL_NOTE_TAGS, REMOVE_TAG } from '../actions/tags_actions';
import merge from 'lodash/merge';

export const currentNoteReducer = (state = {}, action) => {
  Object.freeze(state);
  let copyState = merge({}, state);
  switch (action.type) {
    case RECEIVE_NOTE:
      return action.note;
    case REMOVE_NOTE:
      return {};
    case RESET_CURRENT_NOTE:
      return {};
    case RECEIVE_INDIVIDUAL_NOTE_TAGS:
      //this is assuming tag creation in the note form on homepage.
      //in that case, the selected note whose tags are being edited
      //will always be the current note.
      copyState.tags = Object.values(action.tags);
      return copyState
    case REMOVE_TAG:
      copyState.tags.forEach((tagsObj, idx) => {
        if (tagsObj.name === action.tag.name) {
          copyState.tags.splice(idx, 1);
          return;
        }
      })
      return copyState
    default:
      return state;
  }
};
