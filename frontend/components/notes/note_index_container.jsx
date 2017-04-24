import { connect } from 'react-redux';
import { fetchNotes, startLoadingAllNotes } from '../../actions/notes_actions';
import NoteIndex from './note_index';
import { notesSelector } from './notes_to_array';

const mapStateToProps = (state) => {
  return {
    notes: notesSelector(state.notes),
    loading: state.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);
