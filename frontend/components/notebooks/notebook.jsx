import React from 'react';

class Notebook extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    if (this.props.formType === "panel") {
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
    } else {
          return (
            <option value={this.props.notebookId}>
              {this.props.title}
            </option>
          )

    }
  }
}


export default Notebook;
