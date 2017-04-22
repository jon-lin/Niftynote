import React from 'react';

const Note = ({note}) => {
  return (
      <li className="noteBox">
        <div className="noteTitle">{note.title}</div>
        <div className="timePassed">{note.time_passed}</div>
        <div className="bodySnippet">{note.body.slice(0, 130)}</div>
      </li>
  );
};

export default Note;
