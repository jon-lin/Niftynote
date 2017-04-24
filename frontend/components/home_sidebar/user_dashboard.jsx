import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth_actions';

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }


  clickHandler() {
    this.props.logout();
  }

  render() {

    return (
      <div>
        <h1>Welcome {this.props.currentUser.email}!</h1>
        <button onClick={this.clickHandler}>Sign Out</button>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
