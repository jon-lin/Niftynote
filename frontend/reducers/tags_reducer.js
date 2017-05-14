import { RECEIVE_ALL_TAGS, RECEIVE_TAG, REMOVE_TAG, RECEIVE_INDIVIDUAL_NOTE_TAGS } from '../actions/tags_actions';
import merge from 'lodash/merge';

export const tagsReducer = (state = {}, action) => {
  Object.freeze(state);
  let copyState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_TAGS:
      return action.tags;
    case RECEIVE_INDIVIDUAL_NOTE_TAGS:
      let newAndDestroyedTags = merge({}, action.tags, action.tagsToUpdate)

      for (let key in action.tagsToUpdate) {
        copyState[key] = action.tagsToUpdate[key];
      }

      return merge({}, copyState, newAndDestroyedTags);
    case RECEIVE_TAG:
      return merge({}, state, { [action.tag.id]: action.tag });
    case REMOVE_TAG:
      delete copyState[action.tag.id];
      return copyState;
    default:
      return state;
  }
};
