import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

export default connect(mapStateToProps, null)(Home);
