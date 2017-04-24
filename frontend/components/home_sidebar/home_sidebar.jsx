import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import UserDashboard from './home_modals/user_dashboard';
import NotebookIndexContainer from '../notebooks/notebook_index_container';

class HomeSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userDashboardModalIsOpen: false,
      notebookModalIsOpen: false
    };

    this.openModal1 = this.openModal1.bind(this);
    this.closeModal1 = this.closeModal1.bind(this);
    this.openModal2 = this.openModal2.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);
  }

  openModal1() {
    this.setState({userDashboardModalIsOpen: true});
  }

  closeModal1() {
    this.setState({userDashboardModalIsOpen: false});
  }

  openModal2() {
    this.setState({notebookModalIsOpen: true});
  }

  closeModal2() {
    this.setState({notebookModalIsOpen: false});
  }

  componentWillMount() {
    Modal.setAppElement('body');
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

          <button className="slideNotebooks" onClick={this.openModal2}>
            <i className="fa fa-book" aria-hidden="true"></i>
          </button>

          <button className="slideTags">
            <i className="fa fa-tags" aria-hidden="true"></i>
          </button>
        </div>

        <div className="profilecontainer" onClick={this.openModal1}>
          <button className="profile">
            <i className="fa fa-user" aria-hidden="true"></i>
          </button>
        </div>

        <Modal
          isOpen={this.state.userDashboardModalIsOpen}
          onRequestClose={this.closeModal1}
          contentLabel="userDashboard"
          className="userDashboardModal"
          style={{overlay: {backgroundColor: 'transparent'}}}
        >
          <UserDashboard />
        </Modal>

        <Modal
          isOpen={this.state.notebookModalIsOpen}
          onRequestClose={this.closeModal2}
          contentLabel="notebookIndexModal"
          className="notebookModal"
        >
          <NotebookIndexContainer />
        </Modal>

      </div>
    );
  }
}

export default HomeSidebar;
