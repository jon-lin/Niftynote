import { combineReducers } from 'redux';

import { sessionReducer }  from './session_reducer';
import { notesReducer } from './notes_reducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  notes: notesReducer
});

export default rootReducer;
