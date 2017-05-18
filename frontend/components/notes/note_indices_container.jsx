import { connect } from 'react-redux';
import { fetchNotes, fetchNote, startLoadingAllNotes } from '../../actions/notes_actions';
import NoteIndex from './note_index';
import { notesSelector } from './notes_to_array';

const mapStateToProps = (state, ownProps) => {
  let processed_notes = state.notes;
  let notebook = null;
  let tag = null;

  if (ownProps.location.pathname.match(/home\/notebooks\/\d+/))  {
      processed_notes = Object.values(state.notes).filter(
        noteObj => {
          return noteObj.notebook_id === parseInt(ownProps.params.notebookId)
        });

      notebook = state.notebooks[ownProps.params.notebookId]
  } else if (ownProps.location.pathname.match(/home\/tags\/\d+/))  {
    processed_notes = Object.values(state.notes).filter(
      noteObj => {
        let result = false;
        let tags = noteObj.tags;

        for (let i = 0; i < tags.length; i++) {
          if (tags[i].id === parseInt(ownProps.params.tagId)) {
            result = true;
            break;
          }
        }
        return result ? true : false;
      });
    tag = state.tags[ownProps.params.tagId];
  }

  let sortedAndProcessedNotes = notesSelector(processed_notes);

  let mostRecentNoteId = null;
  let mostRecentNotebookId = null;
  if (sortedAndProcessedNotes[0]) {
    mostRecentNoteId = sortedAndProcessedNotes[0].id;
    mostRecentNotebookId = sortedAndProcessedNotes[0].notebook_id;
  }

  return {
    notes: sortedAndProcessedNotes,
    mostRecentNoteId: mostRecentNoteId,
    mostRecentNotebookId: mostRecentNotebookId,
    loading: state.loading,
    notebook: notebook,
    tag: tag
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNote: (id) => dispatch(fetchNote(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);
