import React from 'react';
import { createNotebook } '../../actions/notebooks_actions';
import { connect } from 'react-redux';

class NotebookItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div>

      <h1>Create Notebook</h1>

    </div>
  }

}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     notebooks: Object.values(state.notebooks),
//     closeModal: ownProps.closeModal
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    createNotebook: (notebook) => dispatch(createNotebook(notebook))
  };
};

export default connect(null, mapDispatchToProps)(NewNotebook);
