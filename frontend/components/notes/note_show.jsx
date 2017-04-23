import { connect } from 'react-redux';
// import { fetchNote } from '../../actions/notes_actions';
import React from 'react';

class NoteShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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

export default connect(mapStateToProps, null)(NoteShow);
