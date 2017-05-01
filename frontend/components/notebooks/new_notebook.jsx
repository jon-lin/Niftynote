import React from 'react';
import { createNotebook } from '../../actions/notebooks_actions';
import { updateNote } from '../../actions/notes_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class NewNotebook extends React.Component {
  constructor(props) {
    super(props);
    this.createNotebook = this.createNotebook.bind(this);
    this.receiveTitle = this.receiveTitle.bind(this);
    this.closeNewNotebookWindow = this.closeNewNotebookWindow.bind(this);
    this.postCreationAction = this.postCreationAction.bind(this);
    this.state = {title: ""};
  }

  createNotebook() {
    let that = this;
    this.props.createNotebook(this.state)
      .then(that.postCreationAction);
  }

  postCreationAction() {
    debugger
    if (this.props.creationRequestOrigin === 'homePage') {
        this.props.updateNote({id: this.props.currentNote.id, notebook_id: this.props.currentNotebook.id }).then(
          this.closeNewNotebookWindow
        )
    } else if (this.props.creationRequestOrigin === 'notebookIndex') {
        this.props.router.push(`/notebooks/${this.state.notebookId}`);
    } else if (this.props.creationRequestOrigin === 'newNote') {
      this.props.currentNote.updateNote({notebook_id: null }).then(
        this.closeNewNotebookWindow
      )
    }
  }

  receiveTitle(e) {
    this.setState({title: e.currentTarget.value});
  }

  closeNewNotebookWindow() {
    this.props.closeNewNotebookModal();
  }

  render() {
    return (
      <div className="newNotebookPage">
        <div className="newNotebookHeader">
          <i className="fa fa-book" aria-hidden="true"></i>
          <h1>Create Notebook</h1>
        </div>
        <input value={this.state.title} onChange={this.receiveTitle} placeholder="Title your notebook" type="text"></input>
        <div className="buttons">
          <button onClick={this.closeNewNotebookWindow}>Cancel</button>
          <button onClick={this.createNotebook}>Create notebook</button>
        </div>
      </div>
    );
  }

}

const dateComparator = (objX, objY) => (
  new Date(objY.updated_at) - new Date(objX.updated_at)
);

const mapStateToProps = (state, myProps) => {
  // let sorted_notebooks_arr = Object.values(state.notebooks).sort(dateComparator);
  // let mostRecentNotebook = state.notebooks[state.currentNote.notebook_id]
  // let currentNotebook;
  //
  // if (mostRecentNotebook) {
  //     currentNotebook = mostRecentNotebook;
  // } else {
  //     currentNotebook = {title: ""};
  // }

  return {
    currentNote: state.currentNote,
    creationRequestOrigin: myProps.creationRequestOrigin,
    closeNewNotebookModal: myProps.closeNewNotebookModal,
    currentNotebook: state.currentNotebook
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNotebook: (notebook) => dispatch(createNotebook(notebook)),
    updateNote: (note) => dispatch(updateNote(note))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewNotebook));

// if you create a new notebook from the notebook index sliding panel, you go to that notebook's show page afterward, this can be a MODAL, looks for a prop passed in that identifies the origin of request
//
// creationRequestOrigin="notebookIndex"
//
// if you create one from the dropdown on the homepage, that note is moved into that notebook that you just created, and you stay on the homepage. MODAL, looks for whether the URL is /home
//
// creationRequestOrigin="homePage"
//
// if you create one from the dropdown in the new note page, the note is moved into the just created notebook and you stay on the new note page.  MODAL, looks for whether the URL is /newnote
//
// creationRequestOrigin="newNote"
//
