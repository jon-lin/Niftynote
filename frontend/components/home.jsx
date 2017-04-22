import React from 'react';
import { Link } from 'react-router';
import Note from './note'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.currentUser) { this.props.router.push('/') }
  }

  clickHandler() {
    this.props.logout();
  }

  render() {
    if (!this.props.currentUser) { return null };

    let notesList = this.props.notes.map( note => {
      debugger
      return (<Note note={note} key={note.id}/>);
    });

    return (
      <div>
        <h2>Welcome {this.props.currentUser.email}!</h2>
        <button onClick={this.clickHandler}>Sign Out</button>

        <ul>List is here:
          {notesList}
        </ul>

      </div>
    );
  }

}

export default Home;

//this is basically what you're looking to render
// <Sidebar />
// <Notebooks />
// <Tags />
// <Notes />
// <Note />
