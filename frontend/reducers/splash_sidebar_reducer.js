import {START_SPLASH_SIDEBAR, STOP_SPLASH_SIDEBAR} from
  '../actions/auth_actions';

const splashSidebarReducer = (state = false, action) => {
  debugger

  switch (action.type) {
    case START_SPLASH_SIDEBAR:
      return true;
    case STOP_SPLASH_SIDEBAR:
      return false;
    default:
      return state;
  }
};

export default splashSidebarReducer;
