import { combineReducers } from 'redux';

import { sessionReducer }  from './session_reducer';
import { notesReducer } from './notes_reducer'
import loadingReducer from './loading_reducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  notes: notesReducer,
  loading: loadingReducer
});

export default rootReducer;
