import React from 'react';
import NoteItem from './note_item'

class NoteIndexCopy extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let notesList = this.props.notes.map( noteItem => {
      return (<NoteItem noteItem={noteItem} key={noteItem.id}/>);
    });

      return (
        <div className="entireNotesIndexCol">
          <div className="notesColTop">
            <h1>NOTES</h1>
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

export default NoteIndexCopy;
