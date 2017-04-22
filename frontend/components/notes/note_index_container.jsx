import { connect } from 'react-redux';
import { fetchNotes } from '../../actions/notes_actions';
import NoteIndex from './note_index';

const mapStateToProps = (state) => {
  debugger
  return {
    notes: Object.values(state.notes)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);
