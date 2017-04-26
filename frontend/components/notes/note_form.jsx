import { connect } from 'react-redux';
import { updateNote, fetchNote } from '../../actions/notes_actions';
import React from 'react';
import { notesSelector } from './notes_to_array';
import ReactQuill from 'react-quill';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.receiveField = this.receiveField.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.currentNote) {return null}
    if (this.props.currentNote.id !== newProps.currentNote.id)
      {this.props.fetchNote(newProps.currentNote.id);
      this.setState(newProps.currentNote);}
  }

  handleChange(text, delta, source, editor) {
    () => this.setState({body: editor.getText().trim()})
  }

  receiveField(title) {
    e => this.setState({title: e.currentTarget.value});
  }

  render() {
    debugger
      if (!this.props.currentNote) {return null}

      console.log(this.state)

      return (
          <ReactQuill
            theme="snow"
            value={this.props.currentNote.body}
            onChange={this.handleChange}

            />
        );
    }
}

// this.props.updateNote(
//     {
//       body: editor.getText().trim(),
//       title: this.props.currentNote.title,
//       id: this.props.currentNote.id
//     }
//   );

// onKeyPress={
//   function() {
//     this.delaySave(
//       function() {this.props.updateNote(this.state)}, 5000
//     );}
//   }


const mapStateToProps = (state) => {
  let mostRecentNote, mostRecentNotes;

  if (jQuery.isEmptyObject(state.currentNote)) {
    mostRecentNotes = notesSelector(state.notes);
    mostRecentNote = mostRecentNotes[0];
    return { currentNote: mostRecentNote };
  }

  return { currentNote: state.currentNote };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNote: (id) => dispatch(fetchNote(id)),
    updateNote: (note) => dispatch(updateNote(note))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
