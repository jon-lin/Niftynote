import { connect } from 'react-redux';
import { fetchNotebooks } from '../../actions/notebooks_actions';
import NotebookShow from './notebook_show';

const mapStateToProps = (state, OwnProps) => {
  return {
    notebooks: Object.values(state.notebooks)
  };
};

const mapDispatchToProps = (dispatch, OwnProps) => {
  return {
    fetchNotebooks: () => dispatch(fetchNotebooks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShow);
