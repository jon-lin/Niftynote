import {RECEIVE_ALL_POKEMON, RECEIVE_POKEMON_DETAIL,
  START_LOADING_ALL_POKEMON, START_LOADING_SINGLE_POKEMON} from
  '../actions/pokemon_actions';

const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case START_LOADING_SINGLE_POKEMON:
    case START_LOADING_ALL_POKEMON:
      return true;
    case RECEIVE_ALL_POKEMON:
    case RECEIVE_POKEMON_DETAIL:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
