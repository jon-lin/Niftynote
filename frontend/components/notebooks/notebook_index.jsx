import React from 'react';
import Notebook from './notebook';

class NotebookIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  render() {
    let notebooksList = this.props.notebooks.map( notebook => {
      return (<Notebook notebook={notebook} key={notebook.id}/>);
    });

    // if (this.props.loading === true) {
    //   return (
    //     <div className="loadingContainer">
    //       <img className="loading" src="/images/loading.gif"/>
    //     </div>
    //   );
    // }

    return (
      <div className="notebookIndexCol">

        <div className="topNotebookColBar">

          <div className="notebooksTopRow">

            <text>NOTEBOOKS</text>

            <button>
              <i className="fa fa-book" aria-hidden="true"></i>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>

          </div>

          <div className="searchField">
            <input type="search" placeholder="Find a notebook" results="0"></input>
          </div>

        </div>

        <ul className="noteBookList">
          {notebooksList}
        </ul>

      </div>
    );
  }
}

export default NotebookIndex;

// <div id="loading-notes-container">
//   <div id="loading-notes"></div>
// </div>
