import React from 'react';
import { Link } from 'react-router';

class Sidebar extends React.Component {
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
          <Link className="addNewNote">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </Link>

          <Link className="searchNotebooks">
            <i class="fa fa-search" aria-hidden="true"></i>
          </Link>

          <button className="slideWorkChat">
            <i class="fa fa-comment" aria-hidden="true"></i>
          </button>
        </div>

        <div className="bottom4buttons">
          <button className="slideShortcuts">
            <i class="fa fa-star" aria-hidden="true"></i>
          </button>

          <button className="showNotesIndex">
            <i class="fa fa-sticky-note" aria-hidden="true"></i>
          </button>

          <button className="slideNotebooks">
            <i class="fa fa-book" aria-hidden="true"></i>
          </button>

          <button className="slideTags">
            <i class="fa fa-tags" aria-hidden="true"></i>
          </button>
        </div>

        <div className="profilecontainer">
          <button className="profile">
            <i class="fa fa-user" aria-hidden="true"></i>
          </button>
        </div>

      </div>
    );
  }
}
