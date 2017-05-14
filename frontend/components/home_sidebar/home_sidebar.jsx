import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import UserDashboard from './home_modals/user_dashboard';
import NotebookIndexContainer from '../notebooks/notebook_index_container';
import TagsIndex from '../tags/tags_index';

class HomeSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userDashboardModalIsOpen: false,
      notebookModalIsOpen: false,
      tagsModalIsOpen: false
    };

    this.openUserDashboard = this.openUserDashboard.bind(this);
    this.closeUserDashboard = this.closeUserDashboard.bind(this);

    this.openNotebookIndex = this.openNotebookIndex.bind(this);
    this.closeNotebookIndex = this.closeNotebookIndex.bind(this);

    this.openTagsIndex = this.openTagsIndex.bind(this);
    this.closeTagsIndex = this.closeTagsIndex.bind(this);

    this.closeAllModals = this.closeAllModals.bind(this);
    this.showNotesIndex = this.showNotesIndex.bind(this);
  }

  openUserDashboard() {
    this.closeAllModals();

    if (!this.state.userDashboardModalIsOpen) {
      this.setState({userDashboardModalIsOpen: true});
    }
  }

  closeUserDashboard() {
    this.setState({userDashboardModalIsOpen: false});
  }

  openNotebookIndex() {
    this.closeAllModals();

    if (!this.state.notebookModalIsOpen) {
      this.setState({notebookModalIsOpen: true});
    }
  }

  closeNotebookIndex() {
    this.setState({notebookModalIsOpen: false});
  }

  openTagsIndex() {
    this.closeAllModals();

    if (!this.state.tagsModalIsOpen) {
      this.setState({tagsModalIsOpen: true});
    }
  }

  closeTagsIndex() {
    this.setState({tagsModalIsOpen: false});
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  closeAllModals() {
    this.closeNotebookIndex();
    this.closeUserDashboard();
    this.closeTagsIndex();
  }

  showNotesIndex() {
    this.closeAllModals();
    this.props.router.push('/home');
  }

  render() {
    return (
      <div className="homeSidebar">

        <div className="imgcontainer">
          <img onClick={() => this.props.router.push('/home')} src='/images/N.png'></img>
        </div>

        <div className="top3buttons">
          <Link className="addNewNote">
            <i onClick={() => this.props.router.push('/newnote')} className="fa fa-plus" aria-hidden="true"></i>
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

          <button className="showNotesIndex" onClick={this.showNotesIndex}>
            <i className="fa fa-sticky-note" aria-hidden="true"></i>
          </button>

          <button className="slideNotebooks" onClick={this.openNotebookIndex}>
            <i className="fa fa-book" aria-hidden="true"></i>
          </button>

          <button className="slideTags" onClick={this.openTagsIndex}>
            <i className="fa fa-tags" aria-hidden="true"></i>
          </button>
        </div>

        <div className="profilecontainer" onClick={this.openUserDashboard}>
          <button className="profile">
            <i className="fa fa-user" aria-hidden="true"></i>
          </button>
        </div>

        <Modal
          isOpen={this.state.userDashboardModalIsOpen}
          onRequestClose={this.closeUserDashboard}
          contentLabel="userDashboard"
          className="userDashboardModal"
          style={{overlay: {backgroundColor: 'transparent'}}}
        >
          <UserDashboard />
        </Modal>

        <Modal
          isOpen={this.state.notebookModalIsOpen}
          onRequestClose={this.closeNotebookIndex}
          contentLabel="notebookIndexModal"
          className="notebookModal"
        >
          <NotebookIndexContainer closeNotebookIndex={this.closeNotebookIndex}/>
        </Modal>

        <Modal
          isOpen={this.state.tagsModalIsOpen}
          onRequestClose={this.closeTagsIndex}
          contentLabel="tagsIndexModal"
          className="tagsModal"
        >
          <TagsIndex closeTagsIndex={this.closeTagsIndex}/>
        </Modal>

      </div>
    );
  }
}

export default withRouter(HomeSidebar);
