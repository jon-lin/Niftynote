import { connect } from 'react-redux';
import React from 'react';
import { notesSelector } from './notes_to_array';
import Modal from 'react-modal';
import NoteInfoPage from './note_info_page';
import { deleteNote } from '../../actions/notes_actions';

class NoteFormTopbar extends React.Component {
  constructor(props) {
    super(props);
    this.deleteNote = this.deleteNote.bind(this);
    this.state = {modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  componentWillMount() {
    Modal.setAppElement('body');
  }

  deleteNote(e) {
    debugger
    this.props.removeNote(this.props.currentNote.id);
  }

  render () {
    return (
      <div>
          <div className="entireNoteformTopbar">
              <div className="topbarLeftSide">
                <button><i className="fa fa-clock-o" aria-hidden="true"></i></button>
                <button><i className="fa fa-star" aria-hidden="true"></i></button>
                <button><i onClick={this.openModal} className="fa fa-info-circle" aria-hidden="true"></i></button>
                <button><i onClick={this.deleteNote} className="fa fa-trash" aria-hidden="true"></i></button>
              </div>

              <div className="topbarRightSide">
                <button></button>
                <button></button>
              </div>
          </div>

          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            className="noteInfoSpread"
            style={{overlay: {backgroundColor: 'white'}}}
            contentLabel="noteInfoModal"
            shouldCloseOnOverlayClick={false}
          >
          <NoteInfoPage closeModal={this.closeModal} note={this.props.currentNote}/>
        </Modal>
      </div>
    );
  }
}

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
    removeNote: (id) => dispatch(deleteNote(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteFormTopbar);
