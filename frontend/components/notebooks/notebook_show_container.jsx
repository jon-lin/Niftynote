import { connect } from 'react-redux';
import { fetchNotebooks } from '../../actions/notebooks_actions';
import NotebookShow from './notebook_show';

const mapStateToProps = (state, OwnProps) => {
  let filtered_notes_list = Object.values(state.notes).filter(
    noteObj => { noteObj.notebook_id === OwnProps.params.notebookId ;})

    debugger

  return {
    notesForSpecificNotebook: filtered_notes_list
  };
};

const mapDispatchToProps = (dispatch, OwnProps) => {
  return {
    fetchNotebooks: () => dispatch(fetchNotebooks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShow);
