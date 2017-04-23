import { combineReducers } from 'redux';

import { sessionReducer }  from './session_reducer';
import { notesReducer } from './notes_reducer';
import loadingReducer from './loading_reducer';
import { notebooksReducer } from './notebooks_reducer';
import { currentNoteReducer } from './current_note_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  notes: notesReducer,
  loading: loadingReducer,
  notebooks: notebooksReducer,
  currentNote: currentNoteReducer
});

export default rootReducer;
