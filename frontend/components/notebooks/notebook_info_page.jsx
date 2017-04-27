import React from 'react';
import Modal from 'react-modal';
import { deleteNotebook, updateNotebook } from '../../actions/notebooks_actions';
import { connect } from 'react-redux';

class NotebookInfo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      defaultNotebook: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);

    this.deleteNotebook = this.deleteNotebook.bind(this);
    this.updateNotebook = this.updateNotebook.bind(this);
  }

  handleInputChange(event) {
    debugger
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    debugger
  }

  updateNotebook() {
    this.props.updateNotebook(this.state)
      .then(this.props.closeNotebookInfo);
  }

  deleteNotebook() {
    debugger
    this.props.deleteNotebook(this.props.notebook.id)
      .then(this.props.closeNotebookInfo);
  }

  render() {

    // let notebook
    //  notebookTitle, notebookId, notebookNoteCount
    //     notebookCreatedAt, notebookUpdatedAt;
    //
    let title, id, note_count, created_at, updated_at;
    if (this.props.notebook) {
      ({title, id, note_count, created_at, updated_at} = this.props.notebook);
    } else  {
      title = id = note_count = created_at = updated_at = null;
    }

    debugger

    // let notebookTitle = this.props.notebook ? this.props.notebook.title : null;
    // let notebookId = this.props.notebook ? this.props.notebook.Id : null;
    // let notebookTitle = this.props.notebook ? this.props.notebook.title : null;
    // let notebookTitle = this.props.notebook ? this.props.notebook.title : null;

    return (
      <div className="notebookInfoPage">
        <div className="notebookInfoHeader">
          <i className="fa fa-info-circle" aria-hidden="true"></i>
          <h1>NOTEBOOK INFO</h1>
        </div>

        <div className="editNotebookSection">

          <input type="text"
              name="title"
              onChange={this.handleInputChange}
              placeholder={title}
              value={this.state.title}>
          </input>

          <label>
            Set as default notebook
            <input
              type="checkbox"
              name="defaultNotebook"
              checked={this.state.defaultNotebook}
              onChange={this.handleInputChange}/>
          </label>

          <button onClick={this.deleteNotebook}>Delete notebook</button>

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
