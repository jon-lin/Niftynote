import ReactQuill from 'react-quill';
import React from 'react';
import { createNote, updateNote } from '../../actions/notes_actions';
import { connect } from 'react-redux';
import NotebookScrollbar from '../notebooks/notebook_scrollbar';
import { withRouter } from 'react-router';

class NewNote extends React.Component {
  constructor(props) {

    super(props);

    let delayTimer = () => setTimeout(() => {
      return this.props.updateNote(
            {
              body: this.state.body,
              title: this.state.title,
              id: this.state.notebookId
            }
          )
    }, 500)

    this.state = { body: '',
                  title: '',
                  delayTimer: delayTimer,
                  timerId: delayTimer(),
                  notebookId: null,
                  noteCreated: false
                 }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (!this.state.noteCreated) {return null}

    this.setState({
                  body: newProps.currentNote.body,
                  title: newProps.currentNote.title,
                  notebookId: newProps.currentNote.id
                })
  }

  handleInputChange(event) {
    let param;
    if (typeof event.target === 'undefined') {
      param = {body: event};
    } else {
      param = {title: event.target.value};
    }

    if (this.state.noteCreated) {
        this.setState(param, clearTimeout(this.state.timerId));
        this.setState({timerId: this.state.delayTimer()});
    } else {
        let noteHasBeenCreated = !this.state.noteCreated;
        this.setState(

          Object.assign({}, param, {noteCreated: noteHasBeenCreated}),

          () => {
                    this.props.createNote(
                        {
                          body: this.state.body,
                          title: this.state.title
                        })
              }
          );
      }
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
      <div className="quill2bigContainer">
        <div className="quillContainer2">

          <NotebookScrollbar formType={formType}/>
          <input type="text" className="quill2InputTitle" placeholder="Title your note" value={this.state.title} onChange={this.handleInputChange}></input>
          <ReactQuill value={this.state.body}
                      placeholder="Just start typing"
                      onChange={this.handleInputChange}
                      modules={ {toolbar: toolbarOptions} }/>
        </div>
        <button className="newNoteDoneButton" onClick={() => this.props.router.push('/home')}>Done</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notebooks: Object.values(state.notebooks),
    currentNote: state.currentNote
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNote: (note) => dispatch(createNote(note)),
    updateNote: (note) => dispatch(updateNote(note))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewNote));

//failed attempt to get notebookId after note is initially created locally
// .then(note => {
//       debugger
//       this.setState({notebookId: note.notebook_id})
//     })
