import React from 'react';
import ShowNote from './note_show';
import { connect } from 'react-redux';
import { fetchNote } from '../../actions/notes_actions';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.showNote = this.showNote.bind(this);
  }

  showNote(e) {
    debugger
    this.props.fetchNote(e.currentTarget.value);
    // <NoteShow noteItem={this.props.noteItem} />
  }

  render() {
    return (
      <div className="wholeNoteItem">
        <li onClick={this.showNote} value={this.props.noteItem.id} className="noteItemBox">
          <buttons className="noteItemButtons">
            <button><i id="what" className="fa fa-comments" aria-hidden="true"></i></button>
            <button><i className="fa fa-clock-o" aria-hidden="true"></i></button>
            <button><i className="fa fa-star" aria-hidden="true"></i></button>
            <button><i className="fa fa-trash" aria-hidden="true"></i></button>
          </buttons>

          <div className="noteItemTitle">{this.props.noteItem.title}</div>
          <div className="timePassed">{this.props.noteItem.time_passed}</div>
          <div className="bodySnippet">{this.props.noteItem.body.slice(0, 130)}</div>
        </li>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNote: (id) => dispatch(fetchNote(id)),
  };
};

export default connect(null, mapDispatchToProps)(NoteItem);
