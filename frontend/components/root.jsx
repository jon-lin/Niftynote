import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import React from 'react';
import { Provider } from 'react-redux';
import AuthFormContainer from './auth_form_container';
import HomeContainer from './home_container'

const Root = ({ store }) => {
    let _redirectIfLoggedIn = (nextState, replace) => {
      if (store.getState().session.currentUser) {
        replace('/home');
      }
    }

    let _ensure_logged_in = (nextState, replace ) => {
      if (!store.getState().session.currentUser) {
        replace('/');
      }
    }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute onEnter={ _redirectIfLoggedIn } component={ AuthFormContainer } />
          <Route path="/signin" onEnter={ _redirectIfLoggedIn } component={ AuthFormContainer } />
          <Route path="/signup" onEnter={ _redirectIfLoggedIn } component={ AuthFormContainer } />
          <Route path="/home" onEnter={ _ensure_logged_in } component={ HomeContainer } />
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
