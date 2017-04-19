import { connect } from 'react-redux';
import { signin, signup, receiveErrors } from '../actions/auth_actions';
import AuthForm from './auth_form';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: !!state.session.currentUser,
    errors: state.session.errors,
    formType: ownProps.location.pathname === '/signin' ? 'signin' : 'signup'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm = ownProps.location.pathname === '/signin' ? signin : signup;

  return {
    processForm: (user) => dispatch(processForm(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
