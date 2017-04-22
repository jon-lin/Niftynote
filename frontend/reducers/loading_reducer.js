import {RECEIVE_NOTES, RECEIVE_NOTE,
  START_LOADING_ALL_NOTES, START_LOADING_NOTE} from
  '../actions/notes_actions';

const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case START_LOADING_ALL_NOTES:
    case START_LOADING_NOTE:
      return true;
    case RECEIVE_NOTES:
    case RECEIVE_NOTE:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
