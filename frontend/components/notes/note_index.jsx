import React from 'react';
import TagShowContainer from '../tags/tag_show_container';
import NoteItem from './note_item';
import NotebookInfo from '../notebooks/notebook_info_page';
import Modal from 'react-modal';

class NoteIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = { notebookInfoIsOpen: false };

    this.openNotebookInfo = this.openNotebookInfo.bind(this);
    this.closeNotebookInfo = this.closeNotebookInfo.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotes()
      .then(() => this.props.fetchNote(this.props.notes[0].id))
      .then(() => Modal.setAppElement('body'));

      // this line below is necessary to refresh the 'currentNote' in the store,
      // so it's displayed
  }

  openNotebookInfo() {
    this.setState({notebookInfoIsOpen: true});
  }

  closeNotebookInfo() {
    this.setState({notebookInfoIsOpen: false});
  }

  render() {
    if (this.props.loading === true) {
      return (
        <div className="loadingContainer">
          <img className="loading" src="/images/loading.gif"/>
        </div>
      );
    }

    let notesList = this.props.notes.map( noteItem => {
      return (<NoteItem noteItem={noteItem} key={noteItem.id}/>);
    });

    let colHeaderPart = <h1 className="notesIndexColHeaderPart">NOTES</h1>

    if (this.props.notebook) {
      colHeaderPart = (
                      <div className="showNotebookNotesBlackBox">
                        <i onClick={this.openNotebookInfo} className="fa fa-info-circle" aria-hidden="true"></i>
                        <h1>{this.props.notebook.title}</h1>
                        <button>Share</button>
                      </div>
                  );
        }
    // else if (this.props.location.pathname.match(/home\/tags\/\d+/)) {
    //     colHeaderPart = <h1>TAG: {this.props.tag.name}</h1>
    // }

    let notebook = this.props.notebook ? this.props.notebook : null;

    return (
      <div className="entireNotesIndexCol">

        <div className="notesColTop">
          {colHeaderPart}
          <div className="notesTopBarSecondRow">
            <text>{notesList.length} notes</text>
            <button>Options:</button>
          </div>
        </div>

        <ul>
          {notesList}
        </ul>

        <Modal
              isOpen={this.state.notebookInfoIsOpen}
              onRequestClose={this.closeNotebookInfo}
              contentLabel="noteBookInfo"
              className="noteBookInfoModal"
              style={{overlay: {backgroundColor: 'white'}}}
              shouldCloseOnOverlayClick={false}
            >
              <NotebookInfo
                closeNotebookInfo={this.closeNotebookInfo}
                notebook={notebook}
                />
          </Modal>

      </div>
    );
  }
}

export default NoteIndex;

// <div id="loading-notes-container">
//   <div id="loading-notes"></div>
// </div>
