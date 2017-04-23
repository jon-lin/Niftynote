import React from 'react';

class Notebook extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <li className="notebook">
          <div className="notebookTitle">{this.props.notebook.title}</div>
          <div className="notesCount">{this.props.notebook.note_count} notes</div>
        </li>
      );
  }
}


export default Notebook;
