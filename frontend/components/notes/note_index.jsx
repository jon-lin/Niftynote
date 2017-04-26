import React from 'react';
import NoteIndexCopy from './note_index_copy';
import NotebookShowContainer from '../notebooks/notebook_show_container';
import TagShowContainer from '../tags/tag_show_container';

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

    let component;
    switch (this.props.route.colType) {
      case "notesIndex":
        component = <NoteIndexCopy {...this.props} />
        debugger
        break;
      case "showNotebookNotes":
        component = <NotebookShowContainer />
        break;
      case "showTagNotes":
        component = <TagShowContainer />
        break;
      default:
        console.log("Switch failed to catch column type!");
    }

    debugger

    return (
      <div>
        {component}
      </div>
    );
  }
}

export default NoteIndex;

// <div id="loading-notes-container">
//   <div id="loading-notes"></div>
// </div>
