import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as TagsAPIUtil from './util/tags_api_util';


window.fetchAllTags = TagsAPIUtil.fetchAllTags;
window.fetchIndividualNoteTags = TagsAPIUtil.fetchIndividualNoteTags;
window.createTags = TagsAPIUtil.createTags;
window.updateTag = TagsAPIUtil.updateTag;
window.deleteTag = TagsAPIUtil.deleteTag;

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
