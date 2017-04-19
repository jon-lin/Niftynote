import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/auth_actions';
import { merge } from 'lodash/merge';

const _initialState = {
  currentUser: null,
  errors: []
};

export const sessionReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, _initialState, { currentUser: action.user });
    case RECEIVE_ERRORS:
      return Object.assign({}, _initialState, { errors: action.errors });
    default:
      return state;
  }
};
