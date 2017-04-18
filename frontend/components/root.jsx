import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form_container';
import GreetingContainer from './greeting_container'

const Root = ({ store }) => {
    let _redirectIfLoggedIn = (nextState, replace) => {
      if (store.getState().session.currentUser) {
        replace('/');
      }
    }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ GreetingContainer } />
          <Route path="/signin" onEnter={ _redirectIfLoggedIn } component={ SessionFormContainer } />
          <Route path="/signup" onEnter={ _redirectIfLoggedIn } component={ SessionFormContainer } />
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
