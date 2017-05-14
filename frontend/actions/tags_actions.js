import * as TagsAPIUtil from '../util/tags_api_util'

export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';
export const RECEIVE_INDIVIDUAL_NOTE_TAGS = 'RECEIVE_INDIVIDUAL_NOTE_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';

export const receiveAllTags = (tags) => (
  {
    type: RECEIVE_ALL_TAGS,
    tags
  }
);

export const receiveIndividualNoteTags = (tags, tagsToUpdate) => (
  {
    type: RECEIVE_INDIVIDUAL_NOTE_TAGS,
    tags,
    tagsToUpdate
  }
);

export const receiveTag = (tag) => (
  {
    type: RECEIVE_TAG,
    tag
  }
);

export const removeTag = (tag) => (
  {
    type: REMOVE_TAG,
    tag
  }
);

export const fetchAllTags = () => dispatch => {
  return TagsAPIUtil.fetchAllTags()
    .then(tags => {
      dispatch(receiveAllTags(tags));
    });
};

export const createTags = (names, note_id) => dispatch => {
  return TagsAPIUtil.createTags(names, note_id)
    .then(newTagsStateANDTagsToUpdate => {
      let tags;
      if (typeof newTagsStateANDTagsToUpdate.tags === 'undefined') {
        tags = {};
      } else {
        tags = newTagsStateANDTagsToUpdate.tags;
      }

      let tagsToUpdate;
      if (typeof newTagsStateANDTagsToUpdate.destroyedTagsToUpdate === 'undefined') {
        tagsToUpdate = {};
      } else {
        tagsToUpdate = newTagsStateANDTagsToUpdate.destroyedTagsToUpdate;
      }

      dispatch(receiveIndividualNoteTags(tags, tagsToUpdate));
    });
};

export const updateTag = (tagId, names) => dispatch => {
  return TagsAPIUtil.updateTag(tagId, names)
    .then(tag => {
      dispatch(receiveTag(tag));
    });
};
// in react, you're going to want to GET INDEX to refresh after you call this

export const deleteTag = (tagId) => dispatch => {
  return TagsAPIUtil.deleteTag(tagId)
    .then(tag => {
      dispatch(removeTag(tag));
    });
};
