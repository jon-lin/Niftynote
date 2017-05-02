import React from 'react';
import NoteForm from './note_form';
import { connect } from 'react-redux';
import { fetchNote, deleteNote } from '../../actions/notes_actions';
import htmlToText from 'html-to-text';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.showNote = this.showNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  showNote(e) {
    this.props.fetchNote(e.currentTarget.value);
  }

  deleteNote(e) {
    this.props.removeNote(e.currentTarget.getAttribute('value'));
    e.stopPropagation();
  }

  render() {
    let bodyPreview;
    if (this.props.noteItem.body) {
      bodyPreview = htmlToText.fromString(this.props.noteItem.body).slice(0, 135);
    } else {
      bodyPreview = "";
    }

    return (
      <div className="wholeNoteItem">
        <li onClick={this.showNote} value={this.props.noteItem.id} className="noteItemBox">
          <buttons className="noteItemButtons">
            <button><i className="fa fa-comments" aria-hidden="true"></i></button>
            <button><i className="fa fa-clock-o" aria-hidden="true"></i></button>
            <button><i className="fa fa-star" aria-hidden="true"></i></button>
            <button><i onClick={this.deleteNote} value={this.props.noteItem.id} className="fa fa-trash" aria-hidden="true"></i></button>
          </buttons>

          <div className="noteItemTitle">{this.props.noteItem.title}</div>
          <div className="timePassed">{this.props.noteItem.time_passed}</div>
          <div className="bodySnippet">{bodyPreview}</div>
        </li>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNote: (id) => dispatch(fetchNote(id)),
    removeNote: (id) => dispatch(deleteNote(id))
  };
};

export default connect(null, mapDispatchToProps)(NoteItem);
