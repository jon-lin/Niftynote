import { RECEIVE_NOTES, RECEIVE_NOTE, REMOVE_NOTE } from '../actions/notes_actions';
// import { REMOVE_TAG, RECEIVE_INDIVIDUAL_NOTE_TAGS } from '../actions/tags_actions';
import merge from 'lodash/merge';

export const notesReducer = (state = {}, action) => {
  Object.freeze(state);
  let copyState = merge({}, state);
  switch (action.type) {
    case RECEIVE_NOTES:
      return action.notes;
    case RECEIVE_NOTE:
      return merge({}, state, { [action.note.id]: action.note });
    case REMOVE_NOTE:
      delete copyState[action.note.id];
      return copyState;
    // without the two case statements below, the notes index won't stay
    // up to date with the latest tag info changes on the page.
    // but the notes index isn't used to access that info anyway,
    // so the statements below aren't necessary.
    //
    // case RECEIVE_INDIVIDUAL_NOTE_TAGS:
    //   a conditional would have to find which note is being edited.
    //   it would then modify that note's tags status.
    // case REMOVE_TAG:
    //   for (let key in copyState) {
    //     let note = copyState[key];
    //     note.tags.forEach((tagsObj, idx) => {
    //       if (tagsObj.name === action.tag.name) {
    //         note.tags.splice(idx, 1);
    //         return;
    //       }
    //     })
    //   }
    //   return copyState
    default:
      return state;
  }
};
