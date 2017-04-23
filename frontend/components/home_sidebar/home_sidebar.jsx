import React from 'react';
import { Link } from 'react-router';

class HomeSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">

        <div className="imgcontainer">
          <img src='/images/N.png'></img>
        </div>

        <div className="top3buttons">
          <Link to='/signin' className="addNewNote">
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

        <div className="profilecontainer">
          <button className="profile">
            <i className="fa fa-user" aria-hidden="true"></i>
          </button>
        </div>

      </div>
    );
  }
}

export default HomeSidebar;
