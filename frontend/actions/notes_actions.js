import * as NotesAPIUtil from '../util/notes_api_util'

export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';

export const receiveNotes = (notes) => (
  {
    type: RECEIVE_NOTES,
    notes
  }
);


export const fetchNotes = () => dispatch => (
  NotesAPIUtil.fetchNotes()
    .then(notes => dispatch(receiveNotes(notes)))
);
