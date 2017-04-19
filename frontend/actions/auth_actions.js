export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
import * as APIUtil from '../util/session_api_util';

export const signin = (user) => (dispatch) => {
    return APIUtil.signin(user)
      .then((user) => dispatch(receiveCurrentUser(user)),
            (result) => dispatch(receiveErrors(result.responseJSON)));
};

export const logout = () => (dispatch) => {
    return APIUtil.logout()
      .then(() => dispatch(receiveCurrentUser(null)),
            (result) => dispatch(receiveErrors(result.responseJSON)));
};

export const signup = (user) => (dispatch) => {
    return APIUtil.signup(user)
      .then((user) => dispatch(receiveCurrentUser(user)),
            (result) => dispatch(receiveErrors(result.responseJSON)));
};

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};
