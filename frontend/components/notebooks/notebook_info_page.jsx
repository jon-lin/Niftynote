import React from 'react';
import Modal from 'react-modal';
import { deleteNotebook, updateNotebook } from '../../actions/notebooks_actions';
import { connect } from 'react-redux';

class NotebookInfo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      defaultNotebook: false,
    }

    this.handleTitle = this.handleTitle.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);

    this.deleteNotebook = this.deleteNotebook.bind(this);
    this.updateNotebook = this.updateNotebook.bind(this);
  }

  handleTitle(e) {
    this.setState({title: e.currentTarget.value});
  }

  handleCheckbox(e) {
    let result = !this.state.defaultNotebook
    this.setState({defaultNotebook: result});
  }

  updateNotebook() {
    this.props.updateNotebook(this.state)
      .then(this.props.closeNotebookInfo);
  }

  deleteNotebook() {
    debugger
    this.props.deleteNotebook(this.props.params.notebookId)
      .then(this.props.closeNotebookInfo);
  }

  render() {
    return (
      <div className="notebookInfoPage">
        <div className="notebookInfoHeader">
          <i className="fa fa-info-circle" aria-hidden="true"></i>
          <h1>NOTEBOOK INFO</h1>
        </div>

        <div className="editNotebookSection">

          <input type="text"
              onChange={this.handleTitle}
              placeholder={this.props.title}
              value={this.state.title}>
          </input>

          <label>
            Set as default notebook
            <input
              type="checkbox"
              name="defaultNotebook"
              checked={this.state.defaultNotebook}
              onChange={this.handleCheckbox}/>
          </label>

          <button onClick={this.removeNotebook}>Delete notebook</button>

        </div>
          <button onClick={this.props.closeNotebookInfo}>Cancel</button>
          <button onClick={this.updateNotebook}>Save</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNotebook: (id) => dispatch(deleteNotebook(id)),
    updateNotebook: (notebook) => dispatch(updateNotebook(notebook))
  };
};

export default connect(null, mapDispatchToProps)(NotebookInfo);
