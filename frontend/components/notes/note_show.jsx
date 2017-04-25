import { connect } from 'react-redux';
import { fetchNote } from '../../actions/notes_actions';
import React from 'react';
import { notesSelector } from './notes_to_array';

class NoteShow extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {note: {}}
  }

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

  render() {

    if (!this.props.currentNote) {return null}

    return (
      <div className="showNote">
        <section>
          THIS IS DEFAULT TEXT
          <br></br>
          {this.props.currentNote.body}
          <br></br>
          THIS IS DEFAULT TEXT
        </section>
        <section>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let mostRecentNote;

  if (jQuery.isEmptyObject(state.currentNote)) {
    debugger
    mostRecentNote = notesSelector(state.notes)[0];
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

export default connect(mapStateToProps, mapDispatchToProps)(NoteShow);
