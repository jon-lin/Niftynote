import { combineReducers } from 'redux';

import { sessionReducer }  from './session_reducer';
import { notesReducer } from './notes_reducer';
import loadingReducer from './loading_reducer';
import { notebooksReducer } from './notebooks_reducer';
import { currentNoteReducer } from './current_note_reducer';

// import splashSidebarReducer from './splash_sidebar_reducer';
//not going to need the above

const rootReducer = combineReducers({
  session: sessionReducer,
  notes: notesReducer,
  loading: loadingReducer,
  notebooks: notebooksReducer,
  currentNote: currentNoteReducer
  // splashSidebar: splashSidebarReducer
});

export default rootReducer;
