import { connect } from 'react-redux';
// import { fetchNote } from '../../actions/notes_actions';
import React from 'react';

class NoteShow extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {note: null};
  }

  // componentDidMount() {
  //   this.props.fetchNote(this.props.noteId)
  //     .then(note => {
  //       debugger
  //       this.setState({note: note})
  //     });
  // }

  render() {

    // if (typeof this.props.currentNote !== 'Object') { return null }
    // debugger
    return (
      <div className="showNote">
        THIS IS THE SHOW NOTE THING:
        {this.props.currentNote.body}
        ANY TEXT ABOVE?
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    currentNote: state.currentNote
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchNote: (id) => dispatch(fetchNote(id))
//   };
// };

export default connect(mapStateToProps, null)(NoteShow);
