import React from 'react';

const NoteItem = ({noteItem}) => {
  return (
      <li className="noteItemBox">
        <div className="noteItemTitle">{noteItem.title}</div>
        <div className="timePassed">{noteItem.time_passed}</div>
        <div className="bodySnippet">{noteItem.body.slice(0, 130)}</div>
      </li>
  );
};

export default NoteItem;
