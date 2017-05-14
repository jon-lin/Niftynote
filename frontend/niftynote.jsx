import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as TagsActions from './actions/tags_actions.js';

window.fetchAllTags = TagsActions.fetchAllTags;
window.updateTag = TagsActions.updateTag;
window.createTags = TagsActions.createTags;
window.deleteTag = TagsActions.deleteTag;

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  window.dispatch = store.dispatch;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
