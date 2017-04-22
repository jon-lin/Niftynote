import React from 'react';

const Note = ({note}) => {
  return (
    <li>
      {note.title} - {note.time_passed}
    </li>
  );
};

export default Note;
