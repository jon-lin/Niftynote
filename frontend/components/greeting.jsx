import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {

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
      </div>
    );
  }

}

export default Greeting;
