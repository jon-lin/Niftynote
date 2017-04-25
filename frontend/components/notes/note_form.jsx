import { connect } from 'react-redux';
import { updateNote } from '../../actions/notes_actions';
import React from 'react';
import { notesSelector } from './notes_to_array';
import ReactQuill from 'react-quill';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleChange = this.handleChange.bind(this);
    // this.delaySave = this.delaySave.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.currentNote)
  }

  //this doesn't work, can't seem to store input locally
  // handleChange(text, delta, source, editor) {
  //   this.setState(
  //       {
  //         body: editor.getText().trim(),
  //         title: this.props.currentNote.title,
  //         id: this.props.currentNote.id
  //       }
  //     );
  //   }

//original working, albeit very fragile version
  // handleChange(text, delta, source, editor) {
  //   setTimeout(this.props.updateNote(
  //     {
  //       body: editor.getText().trim(),
  //       title: this.props.currentNote.title,
  //       id: this.props.currentNote.id
  //     }
  //   ), 2000);
  // }

  handleChange(text, delta, source, editor) {
    this.props.updateNote(
        {
          body: editor.getText().trim(),
          title: this.props.currentNote.title,
          id: this.props.currentNote.id
        }
      );
  }

  // this.setState()
  // this.delaySave({ body: text });

  // delaySave(saveAction) {
  //   setTimeout(() => this.setState(saveAction), 3000);
  //   clearTimeout
  // }

  // delaySave() {
  //   let timer = 0
  //   return function(callback, ms) {
  //     clearTimeout(timer);
  //     timer = setTimeout(callback, ms);
  //   }
  // }()

  render() {
      let setValue = (typeof this.props.currentNote === 'undefined') ? "" : this.state.body

      console.log(this.state)

      return (
          <ReactQuill
            theme="snow"
            value={setValue}
            onChange={this.handleChange}

            />
        );
    }
}

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
    debugger
    mostRecentNote = mostRecentNotes[0];
    debugger
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

/////////////

// if (  typeof this.props.currentNote === 'undefined' ||
//       this.props.currentNote.id !== newProps.currentNote.id
  // ) { this.setState(newProps.currentNote) }


  ///////////

// if (typeof newProps.currentNote === 'undefined') {
//         this.setState({});
//         return null;
//     }



// this.props.currentNote.body
          // className="testquillclassUsertest"
          // id="QUILLTEST"
        // placeholder="Begin typing your note here!"
          // onKeyPress={this.printConsoleLog}

// style={backgroundColor: 'yellow'}
  // render() {
    // if (!this.props.currentNote) {return null}

    // return (
    //         <ReactQuill value={this.state.title, this.state.body}
    //          onChange={this.receiveFields} />
    //         );

    // }
//   }
// }

// return (
//   <div className="showNote">
//     <section>
//       THIS IS DEFAULT TEXT
//       <br></br>
//       {this.props.currentNote.body}
//       <br></br>
//       THIS IS DEFAULT TEXT
//     </section>
//     <section>
//     </section>
//   </div>
// );

////////////////

// import { connect } from 'react-redux';
// import { fetchNote } from '../../actions/notes_actions';
// import React from 'react';
// import { notesSelector } from './notes_to_array';

// class NoteShow extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = {note: {}}
//   }
//
//   // componentWillMount() {
//     // if this.state.note !== empty, clear it
//     // if (this.props.currentNote.body) {
//     //   this.props.currentNote.body = null;
//     // }
//   // }
//
//   // componentDidMount() {
//     // let firstNote = $('#root > div > div > div.entireNotesIndexCol > ul > div:nth-child(1) > li')[0].value;
//   //   debugger
//     // this.props.fetchNote(firstNote);
//   // }
//
//   render() {
//
//     if (!this.props.currentNote) {return null}
//
//     return (
//       <div className="showNote">
//         <section>
//           THIS IS DEFAULT TEXT
//           <br></br>
//           {this.props.currentNote.body}
//           <br></br>
//           THIS IS DEFAULT TEXT
//         </section>
//         <section>
//         </section>
//       </div>
//     );
//   }
// }
//
// const mapStateToProps = (state) => {
//   let mostRecentNote;
//
//   if (jQuery.isEmptyObject(state.currentNote)) {
//     debugger
//     mostRecentNote = notesSelector(state.notes)[0];
//     debugger
//     return { currentNote: mostRecentNote };
//   }
//
//   return { currentNote: state.currentNote };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchNote: (id) => dispatch(fetchNote(id))
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(NoteShow);
