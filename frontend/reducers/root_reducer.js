import { combineReducers } from 'redux';

import { sessionReducer }  from './session_reducer';
import { notesReducer } from './notes_reducer';
import loadingReducer from './loading_reducer';
import splashSidebarReducer from './splash_sidebar_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  notes: notesReducer,
  loading: loadingReducer,
  splashSidebar: splashSidebarReducer
});

export default rootReducer;
