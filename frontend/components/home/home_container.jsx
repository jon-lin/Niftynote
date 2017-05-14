import { connect } from 'react-redux';
import Home from './home';
import { fetchAllTags } from '../../actions/tags_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllTags: () => dispatch(fetchAllTags()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

//experimentation with getting initial currentNote to load isn't working

// import { connect } from 'react-redux';
// import { fetchNote } from '../../actions/notes_actions';
// import { notesSelector } from '../notes/notes_to_array';
// import Home from './home';
//
// const mapStateToProps = (state) => {
//   let mostRecentNote, mostRecentNotes;
//
//   if (jQuery.isEmptyObject(state.currentNote)) {
//     mostRecentNotes = notesSelector(state.notes);
//     mostRecentNote = mostRecentNotes[0];
//
//     return {
//       currentNote: mostRecentNote,
//       currentUser: state.session.currentUser
//     };
//
//   }
//
//   return {
//     currentNote: state.currentNote,
//     currentUser: state.session.currentUser
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchNote: (id) => dispatch(fetchNote(id))
//   };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
