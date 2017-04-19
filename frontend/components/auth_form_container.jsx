import { connect } from 'react-redux';
import { signin, signup, receiveErrors } from '../actions/auth_actions';
import AuthForm from './auth_form';

const mapStateToProps = (state, ownProps) => {

  let formType;
  switch (ownProps.location.pathname) {
    case '/':
      formType = 'splashSignUp'
      break;
    case '/signup':
      formType ='plainSignUp'
      break;
    case '/signin':
      formType = 'signin'
      break;
    default:
      console.log("Location pathname isn't being caught");
  }

  return {
    loggedIn: !!state.session.currentUser,
    errors: state.session.errors,
    formType
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
