import React from 'react';
import { withRouter } from 'react-router';
import { deleteNotebook, fetchNotebooks } from '../../actions/notebooks_actions';
import { fetchNotes }  from '../../actions/notes_actions';
import { connect } from 'react-redux';

class NotebookItem extends React.Component {
  constructor(props) {
    super(props);
    this.openNotebook = this.openNotebook.bind(this);
    this.deleteNotebook = this.deleteNotebook.bind(this);
  }

  openNotebook(e) {
    this.props.closeNotebookIndex();
    this.props.router.push(`/home/notebooks/${e.currentTarget.value}`);
  }

  deleteNotebook(e) {
    this.props.deleteNotebook(e.currentTarget.getAttribute('value'))
      .then(this.props.fetchNotes)
      .then(this.props.fetchNotebooks);

    e.stopPropagation();
  }

  render() {

    if (this.props.formType === "panel") {
      return (
          <li onClick={this.openNotebook} value={this.props.notebook.id} className="notebook">
            <buttons className="notebookButtons">
              <button><i className="fa fa-comments" aria-hidden="true"></i></button>
              <button><i className="fa fa-star" aria-hidden="true"></i></button>
              <button><i onClick={this.deleteNotebook} value={this.props.notebook.id} className="fa fa-trash" aria-hidden="true"></i></button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNotebook: (id) => dispatch(deleteNotebook(id)),
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNotebooks: () => dispatch(fetchNotebooks())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(NotebookItem));
