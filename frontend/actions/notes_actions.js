import * as NotesAPIUtil from '../util/notes_api_util'

export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const START_LOADING_ALL_NOTES = 'START_LOADING_ALL_NOTES';
export const START_LOADING_NOTE = 'START_LOADING_NOTE';

export const receiveNotes = (notes) => (
  {
    type: RECEIVE_NOTES,
    notes
  }
);

export const receiveNote = (note) => (
  {
    type: RECEIVE_NOTE,
    note
  }
);

export const fetchNotes = () => dispatch => {
  debugger
  startLoadingAllNotes()
  debugger
  return NotesAPIUtil.fetchNotes()
    .then(notes => {
      debugger
      dispatch(receiveNotes(notes));
    });
};

export const fetchNote = (id) => dispatch => {
  // startLoadingAllNotes();
  debugger
  return NotesAPIUtil.fetchNote(id)
    .then(note => {
      debugger
      dispatch(receiveNote(note));
    });
};

export const startLoadingAllNotes = () => (
  {type: START_LOADING_ALL_NOTES}
);

export const startLoadingNote= () => (
  {type: START_LOADING_NOTE}
);
