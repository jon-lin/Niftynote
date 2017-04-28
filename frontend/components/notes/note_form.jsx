import ReactQuill from 'react-quill';
import React from 'react';
import { updateNote, fetchNote } from '../../actions/notes_actions';
import { connect } from 'react-redux';

class NoteForm extends React.Component {
  constructor(props) {

    let delayTimer = () => setTimeout(() => {
      return this.props.updateNote(
            {
              body: this.state.text,
              title: this.props.currentNote.title,
              id: this.props.currentNote.id
            }
          )
    }, 3000)

    super(props)
    this.state = { text: '', delayTimer: delayTimer, timerId: delayTimer() }
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    // if (this.state === null) {
    // debugger
      this.setState({text: newProps.currentNote.body})
    // }
  }

  handleChange(value) {
    this.setState(
      { text: value },
      clearTimeout(this.state.timerId)
    );

    this.setState({timerId: this.state.delayTimer()});
  }

  render() {
    return (
      <ReactQuill value={this.state.text}
                  onChange={this.handleChange} />
    )
  }
}

const mapStateToProps = (state) => {
  return { currentNote: state.currentNote };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNote: (note) => dispatch(updateNote(note))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);

// import { connect } from 'react-redux';
// import { updateNote, fetchNote } from '../../actions/notes_actions';
// import React from 'react';
// import { notesSelector } from './notes_to_array';
// import ReactQuill from 'react-quill';
//
// class NoteForm extends React.Component {
//   constructor(props) {
//     super(props);
//
//     let delayTimer = (text) => setTimeout((text) => {
//       return this.props.updateNote(
//             {
//               body: text,
//               title: this.props.currentNote.title,
//               id: this.props.currentNote.id
//             }
//           )
//     }, 3000)
//
//     this.state = {delayTimer, timerId: 0};
//     this.handleChange = this.handleChange.bind(this);
//   }
//
//
//   componentWillReceiveProps(newProps) {
//     if (this.state === null) { this.setState(newProps.currentNote) }
//   }
//
//   componentDidMount() {
//     let timerId = this.state.delayTimer();
//     this.setState({timerId: timerId});
//   }
//
//   // componentWillUpdate() {
//   //   console.log(this.state);
//   // }
//
//   handleChange(text, delta, source, editor) {
//     clearTimeout(this.state.timerId);
//     let timerId = this.state.delayTimer(editor.getText().trim());
//     this.setState({timerId: timerId});
//
//     console.log(editor.getText().trim())
//   }
//
//   render() {
//       if (!this.props.currentNote) {return null}
//
//       let toolbarOptions = [
//           ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
//           ['blockquote', 'code-block'],
//
//           [{ 'header': 1 }, { 'header': 2 }],               // custom button values
//           [{ 'list': 'ordered'}, { 'list': 'bullet' }],
//           [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
//           [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
//           [{ 'direction': 'rtl' }],                         // text direction
//
//           [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
//           [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
//
//           [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
//           [{ 'font': [] }],
//           [{ 'align': [] }],
//
//           ['clean']                                         // remove formatting button
//         ];
//
//       return (
//         <div>
//           <div>
//             <text>Title</text>
//             <input type="text" className="noteTitle"></input>
//           </div>
//           <ReactQuill
//             theme="snow"
//             value={this.props.currentNote.body}
//             onChange={this.handleChange}
//             modules={ {toolbar: toolbarOptions} }
//             />
//         </div>
//         );
//     }
// }
//
// const mapStateToProps = (state) => {
//   let mostRecentNote, mostRecentNotes;
//
//
//
//   if (jQuery.isEmptyObject(state.currentNote)) {
//     mostRecentNotes = notesSelector(state.notes);
//     mostRecentNote = mostRecentNotes[0];
//     return { currentNote: mostRecentNote };
//   }
//
//   return { currentNote: state.currentNote };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchNote: (id) => dispatch(fetchNote(id)),
//     updateNote: (note) => dispatch(updateNote(note))
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
