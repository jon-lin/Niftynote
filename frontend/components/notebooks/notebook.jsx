import React from 'react';

class Notebook extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <li className="notebook">
          <buttons className="notebookButtons">
            <button><i className="fa fa-comments" aria-hidden="true"></i></button>
            <button><i className="fa fa-star" aria-hidden="true"></i></button>
            <button><i className="fa fa-trash" aria-hidden="true"></i></button>
          </buttons>

          <div className="notebookTitle">{this.props.notebook.title}</div>
          <div className="notesCount">{this.props.notebook.note_count} notes</div>
        </li>
      );
  }
}


export default Notebook;
