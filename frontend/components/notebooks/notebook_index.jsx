import React from 'react';
import NotebookItem from './notebook_item';
import NewNotebook from './new_notebook';
import Modal from 'react-modal';

class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newNotebookModalIsOpen: false };

    this.openNewNotebookModal = this.openNewNotebookModal.bind(this);
    this.closeNewNotebookModal = this.closeNewNotebookModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openNewNotebookModal() {
    // if (!this.state.newNotebookModalIsOpen) {
      this.setState({newNotebookModalIsOpen: true});
    // }
  }

  closeNewNotebookModal() {
    this.setState({newNotebookModalIsOpen: false});
  }

  render() {
    let notebooksList = this.props.notebooks.map( notebook => {
      return (<NotebookItem
                  formType="panel"
                  notebook={notebook}
                  key={notebook.id}
                  closeNotebookIndex={this.props.closeNotebookIndex}
                />
              );
    });

    // if (this.props.loading === true) {
    //   return (
    //     <div className="loadingContainer">
    //       <img className="loading" src="/images/loading.gif"/>
    //     </div>
    //   );
    // }

    return (
      <div className="notebookIndexCol">

        <div className="topNotebookColBar">

          <div className="notebooksTopRow">

            <text>NOTEBOOKS</text>

            <button onClick={this.openNewNotebookModal}>
              <i className="fa fa-book" aria-hidden="true"></i>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>

          </div>

          <div className="searchField">
            <input type="search" placeholder="Find a notebook" results="0"></input>
          </div>

        </div>

        <div className="noteBookListContainer">
          <ul className="noteBookList">
            {notebooksList}
          </ul>
        </div>

        <Modal
              isOpen={this.state.newNotebookModalIsOpen}
              onRequestClose={this.closeNewNotebookModal}
              contentLabel="newNotebook"
              className="newNotebookModal"
              style={{overlay: {backgroundColor: 'white'}}}
              shouldCloseOnOverlayClick={false}
            >
              <NewNotebook
                creationRequestOrigin="notebookIndex"
                closeNewNotebookModal={this.closeNewNotebookModal}
                closeNotebookIndexModal={this.props.closeNotebookIndex}
                />
          </Modal>

      </div>
    );
  }
}

export default NotebookIndex;

// <div id="loading-notes-container">
//   <div id="loading-notes"></div>
// </div>
