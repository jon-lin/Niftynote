import React from 'react';
import { Link } from 'react-router';
import NoteIndexContainer from '../notes/note_index_container';
import NoteForm from '../notes/note_form';
import NoteFormTopbar from '../notes/note_form_top_bar';
import HomeSidebar from '../home_sidebar/home_sidebar';
import NotebookScrollbar from '../notebooks/notebook_scrollbar';

class Home extends React.Component {

  constructor(props) {
    super(props);

  }

  componentWillReceiveProps(newProps) {
    if (!newProps.currentUser) { this.props.router.push('/') }
  }

  render() {
    if (!this.props.currentUser) { return null };

    let formType = (this.props.location.pathname === '/home') ? 'homeDropDown' : 'newNotebookDropDown';

    return (
      <div className="homeTotalLayout">
        <HomeSidebar />

            {this.props.children}

            <NotebookScrollbar formType={formType}/>

            <div className="noteTopbarANDnoteForm">
              <NoteFormTopbar />
              <NoteForm />
            </div>


      </div>
    );
  }

}

export default Home;

// <div className="entireRightSideofApp">
// </div>

//this is basically what you're looking to render
// <Sidebar />
// <Notebooks />
// <Tags />
// <Notes />
// <Note />
