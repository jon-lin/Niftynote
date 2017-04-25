import { connect } from 'react-redux';
import { fetchNote } from '../../actions/notes_actions';
import React from 'react';
import { notesSelector } from './notes_to_array';
import ReactQuill from 'react-quill';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.currentNote)
  }

  handleChange(text) { e => {
      this.setState({ body: text }) 
    }
  }

  render() {
    debugger
      if (typeof this.props.currentNote === 'undefined') {
        return (
            <ReactQuill
              theme="snow"
              value=""
              onChange={this.handleChange}/>
          );
      } else {
        return (
            <ReactQuill
              theme="snow"
              value={this.state.body}
              onChange={this.handleChange}/>
          );
      }
  }
}

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
    fetchNote: (id) => dispatch(fetchNote(id))
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
