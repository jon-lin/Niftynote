import { connect } from 'react-redux';
import { fetchNotebooks } from '../../actions/notebooks_actions';
import NotebookShow from './notebook_show';

const mapStateToProps = (state, OwnProps) => {
  let filtered_notes = Object.values(state.notes).filter(
    noteObj => {
      return noteObj.notebook_id === parseInt(OwnProps.params.notebookId)
    });

  let filtered_and_sorted_notes = filtered_notes.sort(
        (objX, objY) => (new Date(objY.updated_at) - new Date(objX.updated_at)));

  return {
    notesForSpecificNotebook: filtered_and_sorted_notes
  };
};

const mapDispatchToProps = (dispatch, OwnProps) => {
  return {
    fetchNotebooks: () => dispatch(fetchNotebooks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShow);
