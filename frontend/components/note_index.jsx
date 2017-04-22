import React from 'react';
import NoteItem from './note_item'

const NoteIndex = (props) => {
  let notesList = props.notes.map( noteItem => {

    return (<NoteItem noteItem={noteItem} key={noteItem.id}/>);
  });

  return (
    <div>
      <div className="notesColTop">
        <h1>Notes</h1>
        <text>{notesList.length} notes</text>
        <button>Options:</button>
      </div>

      <ul>List is here:
        {notesList}
      </ul>
    </div>
  )
}

export default NoteIndex;
