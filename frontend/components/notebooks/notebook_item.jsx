import React from 'react';
import { withRouter } from 'react-router';

class NotebookItem extends React.Component {
  constructor(props) {
    super(props);
    this.openNotebook = this.openNotebook.bind(this);
  }

  openNotebook(e) {
    this.props.closeModal();
    this.props.router.push(`/home/notebooks/${e.currentTarget.value}`);
  }

  render() {

    if (this.props.formType === "panel") {
      return (
          <li onClick={this.openNotebook} value={this.props.notebook.id} className="notebook">
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

export default withRouter(NotebookItem);
