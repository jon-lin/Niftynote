import React from 'react';
import NoteIndexCopy from './note_index_copy';
import NotebookShowContainer from '../notebooks/notebook_show_container';
import TagShowContainer from '../tags/tag_show_container';
import NoteItem from './note_item'

class NoteIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchNotes();
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

    if (this.props.location.pathname.match(/home\/notebooks\/\d+/)) {
      colHeaderPart = (
                      <div className="showNotebookNotesBlackBox">
                        <i className="fa fa-info-circle" aria-hidden="true"></i>
                        <h1>{this.props.notebook.title}</h1>
                        <button>Share</button>
                      </div>
                  );
        }
    // else if (this.props.location.pathname.match(/home\/tags\/\d+/)) {
    //     colHeaderPart = <h1>TAG: {this.props.tag.name}</h1>
    // }

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

      </div>
    );
  }
}

export default NoteIndex;

// <div id="loading-notes-container">
//   <div id="loading-notes"></div>
// </div>
