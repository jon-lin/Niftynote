import { connect } from 'react-redux';
import { signin, signup, receiveErrors } from '../actions/session_actions';
import SessionForm from './session_form';

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

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
