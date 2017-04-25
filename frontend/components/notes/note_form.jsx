import { connect } from 'react-redux';
import { fetchNote } from '../../actions/notes_actions';
import React from 'react';
import { notesSelector } from './notes_to_array';
import ReactQuill from 'react-quill';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    // let {title, body} = this.props.currentNote;
    // this.state = { title, body };
    // this.receiveFields = this.receiveFields.bind(this
    // this.state = { text: '' }
    this.state = this.props.currentNote;
    this.handleChange = this.handleChange.bind(this);
    // this.printConsoleLog = this.printConsoleLog.bind(this);
  }

  componentDidMount() {
    this.props.fetchNote(this.props.currentNote.id)
  }

  component

  handleChange(value) {
    this.setState({ body: value });
  }
  //
  // printConsoleLog() {
  //   console.log("A KEY WAS PRESSED AND RELEASED!");
  // }

  // componentWillMount() {
    // if this.state.note !== empty, clear it
    // if (this.props.currentNote.body) {
    //   this.props.currentNote.body = null;
    // }
  // }

  // componentDidMount() {
    // let firstNote = $('#root > div > div > div.entireNotesIndexCol > ul > div:nth-child(1) > li')[0].value;
  //   debugger
    // this.props.fetchNote(firstNote);
  // }

  // receiveFields(field) {
  //   e => (this.setState({[field]: e.currentTarget.value}))
  // }

  render() {
      if (!this.state) {return null}

      return (
        <ReactQuill
          theme="snow"
          value={this.state.body}
          onChange={this.handleChange}/>
        )
  }
}

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

const mapStateToProps = (state) => {
  let mostRecentNote;

  if (jQuery.isEmptyObject(state.currentNote)) {
    mostRecentNote = notesSelector(state.notes)[0];
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
