import ReactQuill from 'react-quill';
import React from 'react';
import { updateNote, fetchNote } from '../../actions/notes_actions';
import { connect } from 'react-redux';
import { notesSelector } from './notes_to_array';
import NotebookScrollbar from '../notebooks/notebook_scrollbar';
import { withRouter } from 'react-router';

class NoteForm extends React.Component {
  constructor(props) {

    let delayTimer = () => setTimeout(() => {

      //these lines can be used as temporary fix in case of initial render problems,
      //specifically when this.props.currentNote is undefined...
      //
      // let noteId;
      // if (this.props.currentNote) {
      //   noteId = this.props.currentNote.id
      // } else {
      //   return null
      // }

      return this.props.updateNote(
            {
              body: this.state.body,
              title: this.state.title,
              id: this.props.currentNote.id
            }
          )
    }, 500)

    super(props)
    this.state = { body: '', title: '', delayTimer: delayTimer, timerId: delayTimer() }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({body: newProps.currentNote.body, title: newProps.currentNote.title})
  }

  componentWillUnmount() {
    this.props.updateNote(
          {
            body: this.state.body,
            title: this.state.title,
            id: this.props.currentNote.id
          }
        );
  }

  handleInputChange(event) {
    let param;
    if (typeof event.target === 'undefined') {
      param = {body: event};
    } else {
      param = {title: event.target.value};
    }

    this.setState(param, clearTimeout(this.state.timerId));
    this.setState({timerId: this.state.delayTimer()});
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

    let formType = (this.props.location.pathname === '/home') ? 'homeDropDown' : 'newNoteDropDown';

    return (
      <div className="quillContainer">

        <NotebookScrollbar formType={formType}/>
        <input type="text" value={this.state.title} onChange={this.handleInputChange}></input>
        <ReactQuill value={this.state.body}
                    onChange={this.handleInputChange}
                    modules={ {toolbar: toolbarOptions} }/>

    </div>
    )
  }
}

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
    updateNote: (note) => dispatch(updateNote(note))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteForm));
