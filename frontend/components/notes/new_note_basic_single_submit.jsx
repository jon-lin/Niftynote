import ReactQuill from 'react-quill';
import React from 'react';
import { createNote } from '../../actions/notes_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class NewNote extends React.Component {
  constructor(props) {

    super(props)

    this.state = { body: '', title: '', }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitNewNote = this.submitNewNote.bind(this);
  }

  handleInputChange(event) {
    let param;
    if (typeof event.target === 'undefined') {
      param = {body: event};
    } else {
      param = {title: event.target.value};
    }

    console.log(this.state);

    this.setState(param);
  }


  submitNewNote() {
    this.props.createNote(this.state)
      .then(() => this.props.router.push('/home'));
  }

  render() {
      let toolbarOptions = [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],

          [{ 'header': 1 }, { 'header': 2 }],               // custom button values
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
          [{ 'direction': 'rtl' }],                         // text direction

          [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],

          ['clean']                                         // remove formatting button
        ];


    return (
      <div className="quill2bigContainer">
        <div className="quillContainer2">
          <input placeholder="Type title in here" type="text" value={this.state.title} onChange={this.handleInputChange}></input>
          <ReactQuill value={this.state.body}
                      onChange={this.handleInputChange}
                      modules={ {toolbar: toolbarOptions} }/>

                    <button onClick={this.submitNewNote}>Save New Note</button>
                    <button onClick={() => this.props.router.push('/home')}>Cancel</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNote: (note) => dispatch(createNote(note))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(NewNote));
