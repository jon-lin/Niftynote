import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../actions/auth_actions';
import { fetchNotes } from '../actions/notes_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    notes: Object.values(state.notes)
    //this will change after selector is put into effect
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchNotes: () => dispatch(fetchNotes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
