import React from 'react';
import { Link } from 'react-router';
import NoteForm from '../notes/note_form';
import NoteFormTopbar from '../notes/note_form_top_bar';
import HomeSidebar from '../home_sidebar/home_sidebar';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllTags();
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.currentUser) { this.props.router.push('/') }
  }

  render() {
    if (!this.props.currentUser) { return null };

    //this code detects clicks outside of tag bar.
    //it caused problems when used in the tag bar componenent.
    //there, the click would fire hundreds of times.
    //here, there's no access to tag bar methods...so not sure what to do with this.
    // $(document).click(event => {
    //   if(!$(event.target).closest('.entireTagBar').length) {
    //     console.log('trip');
    //   }
    // });

    return (
      <div className="homeTotalLayout">

        <div className="homeLeftSide">
          <HomeSidebar />
          {this.props.children}
        </div>

          <div className="outerhomeRightSide">
            <div className="innerhomeRightSide">
              <div className="noteFormTopBarContainer"><NoteFormTopbar /></div>
              <NoteForm />

            </div>
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

// <div className="noteTopbarANDnoteForm">
// </div>

//experimentating with getting a initial currentNote laoded isn't working..
// componentWillReceiveProps(newProps) {
//   if (!this.props.currentNote) {return null}
//
//   if (this.props.currentNote.id !== newProps.currentNote.id) {
//       this.props.fetchNote(newProps.currentNote.id);
//   }
// }

// componentDidMount() {
//   debugger
//   this.props.fetchNote(this.props.currentNote);
// }
  // if (!this.props.currentNote) {return null}
  //
  // if (this.props.currentNote) {
  //   if (this.props.currentNote.id !== newProps.currentNote.id) {
  //     this.props.fetchNote(newProps.currentNote.id);
  //   }
  // }
