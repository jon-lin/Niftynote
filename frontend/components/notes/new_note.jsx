import ReactQuill from 'react-quill';
import React from 'react';
import { createNote, updateNote } from '../../actions/notes_actions';
import { fetchNotebooks } from '../../actions/notebooks_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import NotebookItem from '../notebooks/notebook_item';

class NewNote extends React.Component {
  constructor(props) {

    super(props);

    let delayTimer = () => setTimeout(() => {
      return this.props.updateNote(
            {
              body: this.state.body,
              title: this.state.title,
              notebook_id: this.state.value,
              id: this.state.id
            }
          )
    }, 500)

    this.state = { body: '',
                  title: '',
                  delayTimer: delayTimer,
                  timerId: delayTimer(),
                  noteCreated: false,
                  value: '',
                  id: null
                 }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  componentWillReceiveProps(newProps) {
    if (!this.state.noteCreated) {return null}

    this.setState({
                  body: newProps.currentNote.body,
                  title: newProps.currentNote.title,
                  id: newProps.currentNote.id,
                  value: newProps.currentNote.notebook_id
                })
  }

  handleInputChange(event) {
    
    let param;
    if (typeof event.currentTarget === 'undefined') {
      param = {body: event};
    } else if (event.currentTarget.value === 'Select...') {
      return null;
    } else if (event.currentTarget.id === 'newNoteDropdownSelectNotebook') {
      param = {value: event.currentTarget.value};
    } else if (event.currentTarget.id === 'newNoteTitleInput') {
      param = {title: event.currentTarget.value};
    }

    if (this.state.noteCreated) {
        this.setState(Object.assign({}, param, {id: this.state.id}), clearTimeout(this.state.timerId));
        this.setState({timerId: this.state.delayTimer()});
    } else {
        let noteHasBeenCreated = !this.state.noteCreated;
        this.setState(

          Object.assign({}, param, {noteCreated: noteHasBeenCreated}),

          () => {
                    this.props.createNote(
                        {
                          body: this.state.body,
                          title: this.state.title,
                          notebook_id: this.state.value
                        }).then(() => this.setState({id: this.props.currentNote.id}))
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

    let notebooksList = this.props.notebooks.map( notebook => {
      return (<NotebookItem formType="dropdown"
                        title={notebook.title}
                        key={notebook.id}
                        notebookId={notebook.id}/>)
              });

    return (
      <div className="quill2bigContainer">

        <div className="quillContainer2">

          <div>
             <select id="newNoteDropdownSelectNotebook" value={this.state.value} onChange={this.handleInputChange}>
               <option value="Select...">
                 Select...
               </option>
               <option value="Create new notebook">
                 CREATE NEW NOTEBOOK
               </option>
                 {notebooksList}
             </select>
          </div>

          <input type="text" id="newNoteTitleInput" className="quill2InputTitle" placeholder="Title your note" value={this.state.title} onChange={this.handleInputChange}></input>
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
    updateNote: (note) => dispatch(updateNote(note)),
    fetchNotebooks: () => dispatch(fetchNotebooks())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewNote));

//failed attempt to get notebookId after note is initially created locally
// .then(note => {
//       debugger
//       this.setState({notebookId: note.notebook_id})
//     })
