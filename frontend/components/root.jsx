import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import React from 'react';
import { Provider } from 'react-redux';
import AuthFormContainer from './auth/auth_form_container';
import HomeContainer from './home/home_container';
import NotebookShowContainer from './notebooks/notebook_show_container';
import NoteIndexContainer from './notes/note_index_container';

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
          <Route path="/home" onEnter={ _ensure_logged_in } component={ HomeContainer }>
            <IndexRoute onEnter={ _ensure_logged_in } component={ NoteIndexContainer } />
            <Route path="/home/notebooks/:notebookId" onEnter={ _ensure_logged_in } component={ NotebookShowContainer }/>
          </Route>
        </Route>
      </Router>
    </Provider>
  )
}
// <Route path="/home/tags/:tagId" onEnter={ _ensure_logged_in } component={ TagShowContainer }/>
// <Route path="/notes" onEnter={ _ensure_logged_in } component={ NotebookShowContainer }/>/

export default Root;
