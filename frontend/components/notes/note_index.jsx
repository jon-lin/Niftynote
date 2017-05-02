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

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentWillReceiveProps(newProps) {
    if (newProps.mostRecentNoteId !== this.props.mostRecentNoteId) {
      if (newProps.mostRecentNotebookId !== this.props.mostRecentNotebookId) {
        $('#root > div > div > div:nth-child(2)')[0].className = "outerhomeRightSide";
        this.props.fetchNote(newProps.mostRecentNoteId);
      }
    } else if (newProps.mostRecentNoteId === null && this.props.mostRecentNoteId === null) {
        $('#root > div > div > div:nth-child(2)')[0].className = "blankOutRightSideWhenNoNotesInNotebook";
    }
  }

  componentDidMount() {
    this.props.fetchNotes();
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

    let notesListItems = this.props.notes.map( noteItem => {
      return (<NoteItem noteItem={noteItem} key={noteItem.id}/>);
    });

    let notesList;
    if (this.props.params.notebookId) {
        notesList = (
          <ul className="notebookShowPageNotesList">
            {notesListItems}
          </ul>
        )
    } else {
        notesList = (
          <ul className="homePageListofAllNotes">
            {notesListItems}
          </ul>
        )
    }

    let colHeaderPart = <h1 className="notesIndexColHeaderPart">NOTES</h1>

    if (this.props.notebook) {
      colHeaderPart = (
                      <div className="showNotebookNotesBlackBox">
                        <i onClick={this.openNotebookInfo} className="fa fa-info-circle" aria-hidden="true"></i>
                        <p>{this.props.notebook.title}</p>
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
            <text>{notesListItems.length} notes</text>
            <button>Options:</button>
          </div>
        </div>

        {notesList}

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
