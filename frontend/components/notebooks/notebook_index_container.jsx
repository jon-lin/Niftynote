import { connect } from 'react-redux';
import { fetchNotebooks } from '../../actions/notebooks_actions';
import NotebookIndex from './notebook_index';

const mapStateToProps = (state, ownProps) => {
  return {
    notebooks: Object.values(state.notebooks),
    closeNotebookIndex: ownProps.closeNotebookIndex
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotebooks: () => dispatch(fetchNotebooks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex);
