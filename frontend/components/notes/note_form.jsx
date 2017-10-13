import ReactQuill from 'react-quill';
import React from 'react';
import { updateNote, fetchNote } from '../../actions/notes_actions';
import { connect } from 'react-redux';
import { notesSelector } from './notes_to_array';
import NotebookScrollbar from '../notebooks/notebook_scrollbar';
import { withRouter } from 'react-router';
import Tagbar from '../tags/tagbar';

class NoteForm extends React.Component {
  constructor(props) {
    super(props)

    let delayTimer = () => setTimeout(() => {
      return this.props.updateNote(
            {
              body: this.state.body,
              title: this.state.title,
              id: this.props.currentNote.id
            }
          )
    }, 500)

    this.state = { body: '', title: '', delayTimer: delayTimer, timerId: delayTimer() }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      body: newProps.currentNote ? newProps.currentNote.body : "",
      title: newProps.currentNote ? newProps.currentNote.title : ""
    })
  }

  componentWillUnmount() {
    clearTimeout(this.state.timerId);
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

      return (
        <div className="quillContainer">

          <div className="scrollbarAndTags">
            <NotebookScrollbar/>
            <Tagbar />
          </div>

          <input id="updateNoteTitle" type="text" value={this.state.title} onChange={this.handleInputChange}></input>
          <ReactQuill value={this.state.body}
                      onChange={this.handleInputChange}
                      modules={ {toolbar: toolbarOptions} }/>
      </div>
      )
  }
}

const mapStateToProps = (state, ownProps) => {
  let mostRecentNote, mostRecentNotes;

  if (jQuery.isEmptyObject(state.currentNote) && ownProps.location.pathname === '/home') {
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

//Code below uses jquery to make the RTE toolbar disappear or appear based on
//whether the user has selected the textbook -- may use this in the future

// $('.quillContainer .ql-editor').click(
//   () => $('.quillContainer .ql-toolbar.ql-snow').attr('id', 'makeQuillToolbarVisible')
// )
//
// $(document).click(function(event) {
//   if(!$(event.target).closest('.quillContainer').length) {
//     $('.quillContainer .ql-toolbar.ql-snow').attr('id', 'hideQuillToolbar');
//   }
// })
