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
    this.props.fetchNote(e.currentTarget.value);
  }

  render() {
    return (
      <div>
        <li onClick={this.showNote} value={this.props.noteItem.id} className="noteItemBox">
          <div className="noteItemTitle">{this.props.noteItem.title}</div>
          <div className="timePassed">{this.props.noteItem.time_passed}</div>
          <div className="bodySnippet">{this.props.noteItem.body.slice(0, 130)}</div>
        </li>
      </div>
    );
  }

}

// const mapStateToProps = (state) => {
//   return {
//     currentNote: state.currentNote
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNote: (id) => dispatch(fetchNote(id)),
  };
};

export default connect(null, mapDispatchToProps)(NoteItem);
