import { createNote } from '../../actions/notes_actions';
import React from 'react';
import ReactQuill from 'react-quill';

class NewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", body: ""}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(text, delta, source, editor) {
    this.props.updateNote(
      {
        body: editor.getText().trim(),
        title: this.props.currentNote.title,
        id: this.props.currentNote.id
      }
    );
  }


  render() {
      return (
        <div className="newNotePage">
          <ReactQuill
            theme="snow"
            value=""
            onChange={this.handleChange}
            />
          </div>
        );
    }
}
