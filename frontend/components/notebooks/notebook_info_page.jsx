import React from 'react';
import Modal from 'react-modal';
import { deleteNotebook, updateNotebook } from '../../actions/notebooks_actions';
import { connect } from 'react-redux';

class NotebookInfo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: this.props.currentNotebook.title,
      defaultNotebook: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);

    this.deleteNotebook = this.deleteNotebook.bind(this);
    this.updateNotebook = this.updateNotebook.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  updateNotebook() {
    this.props.updateNotebook(Object.assign({}, this.state, {id: this.props.notebook.id}))
      .then(this.props.closeNotebookInfo);
  }

  deleteNotebook() {
    this.props.deleteNotebook(this.props.notebook.id)
      .then(this.props.closeNotebookInfo);
  }

  render() {
    let title, id, note_count, created_at, updated_at, defaultNotebook;
    if (this.props.notebook) {
      ({title, id, note_count, created_at, updated_at, defaultNotebook} = this.props.notebook);
    } else  {
      title = id = note_count = created_at = updated_at = defaultNotebook = null;
    }

    let defaultNotebookCheckBox = null;
    let deleteNotebookLink = null;

    if (defaultNotebook === false) {
      defaultNotebookCheckBox = (
        <label>
          Set as default notebook
          <input
            type="checkbox"
            name="defaultNotebook"
            checked={this.state.defaultNotebook}
            onChange={this.handleInputChange}/>
        </label>
      );

      deleteNotebookLink = (
        <a href="" onClick={this.deleteNotebook}>Delete notebook</a>
      );
    } else {
      deleteNotebookLink = (
        <p>To delete this notebook, set another notebook as your default notebook first.</p>
      );
    }

    return (
      <div className="notebookInfoPage">
        <div className="notebookInfoHeader">
          <i className="fa fa-info-circle" aria-hidden="true"></i>
          <h1>NOTEBOOK INFO</h1>
        </div>

        <div className="editNotebookSection">

          <label><strong>Title:</strong>
            <input type="text"
                name="title"
                onChange={this.handleInputChange}
                placeholder={title}
                value={this.state.title}>
            </input>
          </label>

          <ul>
            <li><strong>Note count</strong>: {note_count}</li>
            <li><strong>Created</strong>: {new Date(created_at).toLocaleString()}</li>
            <li><strong>Updated</strong>: {new Date(updated_at).toLocaleString()}</li>
            <li>This notebook <strong>{defaultNotebook ? "is" : "is not"} the default notebook.</strong></li>
          </ul>

          {defaultNotebookCheckBox}

          {deleteNotebookLink}

        </div>

          <div className="buttons">
            <button onClick={this.props.closeNotebookInfo}>Cancel</button>
            <button onClick={this.updateNotebook}>Save</button>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state, OwnProps) => {
  return { currentNotebook: OwnProps.notebook };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNotebook: (id) => dispatch(deleteNotebook(id)),
    updateNotebook: (notebook) => dispatch(updateNotebook(notebook))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookInfo);
