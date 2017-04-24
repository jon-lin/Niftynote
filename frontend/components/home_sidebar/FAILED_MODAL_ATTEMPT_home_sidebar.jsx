import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import UserDashboard from './home_modals/user_dashboard';

class HomeSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      modalChoice: null
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.modalLoader = this.modalLoader.bind(this);
    this.modalPicker = this.modalPicker.bind(this);
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

  modalPicker(e) {
    let modalComponent = null
    switch (e.target.getAttribute('class')) {
      case 'fa fa-user':
        modalComponent = <UserDashboard />
        break;
      default:
        break;
    }
    // debugger
    this.modalLoader(modalComponent);
  }

  modalLoader(modalComponent = null) {
    let modalPick = (
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        contentLabel="userDashboard"
        className="userDashboardModal"
        style={{overlay: {backgroundColor: 'transparent'}}}
      >
        {modalComponent}
      </Modal>
    )

    this.setState({modalChoice: modalPick})
    this.openModal();
  }

  render() {
    return (
      <div className="homeSidebar">

        <div className="imgcontainer">
          <img src='/images/N.png'></img>
        </div>

        <div className="top3buttons">
          <Link className="addNewNote">
            <i className="fa fa-plus" aria-hidden="true"></i>
          </Link>

          <Link className="searchNotebooks">
            <i className="fa fa-search" aria-hidden="true"></i>
          </Link>

          <button className="slideWorkChat">
            <i className="fa fa-comment" aria-hidden="true"></i>
          </button>
        </div>

        <div className="bottom4buttons">
          <button className="slideShortcuts">
            <i className="fa fa-star" aria-hidden="true"></i>
          </button>

          <button className="showNotesIndex">
            <i className="fa fa-sticky-note" aria-hidden="true"></i>
          </button>

          <button className="slideNotebooks">
            <i className="fa fa-book" aria-hidden="true"></i>
          </button>

          <button className="slideTags">
            <i className="fa fa-tags" aria-hidden="true"></i>
          </button>
        </div>

        <div className="profilecontainer" onClick={this.modalPicker}>
          <button className="profile">
            <i className="fa fa-user" aria-hidden="true"></i>
          </button>
        </div>

        {this.state.modalChoice}

      </div>
    );
  }
}

export default HomeSidebar;
