import React from 'react';
import NoteItem from './note_item'

const NoteIndex = (props) => {
  let notesList = props.notes.map( noteItem => {

    return (<NoteItem noteItem={noteItem} key={noteItem.id}/>);
  });

  return (
    <ul>List is here:
      {notesList}
    </ul>
  )
}

export default NoteIndex;
