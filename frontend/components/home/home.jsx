import React from 'react';
import { Link } from 'react-router';
import NoteIndexContainer from '../notes/note_index_container'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.currentUser) { this.props.router.push('/') }
  }

  clickHandler() {
    this.props.logout();
  }

  render() {
    if (!this.props.currentUser) { return null };

    return (
      <div>
        <h2>Welcome {this.props.currentUser.email}!</h2>
        <button onClick={this.clickHandler}>Sign Out</button>

        <NoteIndexContainer {...this.props} />

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
