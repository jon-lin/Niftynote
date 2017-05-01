import * as NotesAPIUtil from '../util/notes_api_util'

export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const RESET_CURRENT_NOTE = 'RESET_CURRENT_NOTE';
export const START_LOADING_ALL_NOTES = 'START_LOADING_ALL_NOTES';

// you're not using this right now/may not need to use it
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

export const removeNote = (note) => (
  {
    type: REMOVE_NOTE,
    note
  }
);

export const resetCurrentNote = () => ({type: RESET_CURRENT_NOTE});

export const fetchNotes = () => dispatch => {
  startLoadingAllNotes()
  return NotesAPIUtil.fetchNotes()
    .then(notes => {
      dispatch(receiveNotes(notes));
    });
};

export const fetchNote = (id) => dispatch => {
  return NotesAPIUtil.fetchNote(id)
    .then(note => {
      dispatch(receiveNote(note));
    });
};

export const createNote = (note) => dispatch => {
  return NotesAPIUtil.createNote(note)
    .then(note => {
      dispatch(receiveNote(note));
    });
};

export const updateNote = (note) => dispatch => {
  return NotesAPIUtil.updateNote(note)
    .then(note => {
      dispatch(receiveNote(note));
    });
};

export const deleteNote = (id) => dispatch => {
  return NotesAPIUtil.deleteNote(id)
    .then(note => {
      dispatch(removeNote(note));
    });
};

export const startLoadingAllNotes = () => (
  {type: START_LOADING_ALL_NOTES}
);

export const startLoadingNote = () => (
  {type: START_LOADING_NOTE}
);
