import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import * as APIUtil from './util/session_api_util';
// import * as authActions from './actions/auth_actions';

// window.signin = authActions.signin;
// window.logout = authActions.logout;
// window.signup = authActions.signup;
// window.jon = {email: 'jclin2013@gmail.com', password: 'password'};

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  // window.store = store;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
