import { connect } from 'react-redux';
import { fetchNotes, startLoadingAllNotes } from '../../actions/notes_actions';
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
  }

  // else if (ownProps.location.pathname.match(/home\/tags\/\d+/))  {
  //   processed_notes = Object.values(state.notes).filter(
  //     noteObj => {
  //       return noteObj.tag_id === parseInt(OwnProps.params.tagId)
  //     });
  //
  //   tag = state.tags[ownProps.params.tagId]
  // }

  return {
    notes: notesSelector(processed_notes),
    loading: state.loading,
    notebook: notebook,
    tag: tag
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);
