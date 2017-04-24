import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import UserDashboard from './user_dashboard';

class HomeSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  render() {
    const customStyles = {
        overlay : {
          position          : 'fixed',
          top               : 0,
          left              : 0,
          right             : 0,
          bottom            : 0,
          backgroundColor   : 'transparent'
        },
        content : {
          position                   : 'absolute',
          top                        : '0',
          // left                       : '0',
          right                      : '0',
          // bottom                     : '0',
          border                     : '1px solid #ccc',
          background                 : '#fff',
          overflow                   : 'auto',
          WebkitOverflowScrolling    : 'touch',
          borderRadius               : '4px',
          outline                    : 'none',
          padding                    : '20px',
          width                      : '100px',
          height                      : '100px'
        }
      };

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

        <div className="profilecontainer" onClick={this.openModal}>
          <button className="profile">
            <i className="fa fa-user" aria-hidden="true"></i>
          </button>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="userDashboard"
          className="userDashboardModal"
          style={{overlay: {backgroundColor: 'transparent'}}}
        >
        <UserDashboard />
      </Modal>

      </div>
    );
  }
}

export default HomeSidebar;
