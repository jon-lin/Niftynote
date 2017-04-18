import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <h2>Welcome {this.props.currentUser.email}!</h2>
          <button onClick={this.clickHandler}>Sign Out</button>
        </div>
      );
    } else {
        return (
          <div>
            <Link to='/signup'>Sign Up</Link>
            <br/>
            <Link to='/signin'>Sign In</Link>
          </div>
        );
    }
  }
}

export default Greeting;
