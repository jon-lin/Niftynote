import React from 'react';
import { connect } from 'react-redux';
import { fetchNotebooks, fetchNotebook } from '../../actions/notebooks_actions';
import { updateNote } from '../../actions/notes_actions';
import { Link } from 'react-router';
import NotebookItem from './notebook_item';

class NotebookScrollbar extends React.Component {
  constructor(props) {
     super(props);
     this.state = {value: this.props.selectedNotebook.id};
     this.handleChange = this.handleChange.bind(this);
   }

   componentDidMount() {
     this.props.fetchNotebooks();
   }

    componentWillReceiveProps(newProps) {
        this.setState({
          value: newProps.selectedNotebook.id
        });
    }

   handleChange(e) {
     this.setState({value: e.target.value});
     this.props.updateNote({id: this.props.currentNote.id, notebook_id: e.target.value});
   }

    render() {
      let notebooksList = this.props.sortedNotebooks.map( notebook => {
        return (<NotebookItem formType="dropdown"
                          title={notebook.title}
                          key={notebook.id}
                          notebookId={notebook.id}/>)
                });

      return (
        <div className="entireNotebookScrollMenu">
          <div className="searchField">
            <input type="search" placeholder="Find a notebook" results="0"></input>
          </div>



          <form className="selectNotebookPartofScrollMenu" onSubmit={this.handleSubmit}>
             <label>
               Notebooks:
               <select value={this.state.value} onChange={this.handleChange}>
                 <div value="Create new notebook"></div>
                 {notebooksList}
               </select>
             </label>
           </form>
        </div>
      );
    }
}


const dateComparator = (objX, objY) => (
  new Date(objY.updated_at) - new Date(objX.updated_at)
);

const mapStateToProps = (state) => {

  let sorted_notebooks_arr = Object.values(state.notebooks).sort(dateComparator);
  let currentNotebook = state.notebooks[state.currentNote.notebook_id]
  let selectedNotebook;

  if (currentNotebook) {
      selectedNotebook = currentNotebook
  } else {
      selectedNotebook = {title: "", body: ""}
  }

  return {
    sortedNotebooks: sorted_notebooks_arr,
    selectedNotebook: selectedNotebook,
    currentNote: state.currentNote
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    fetchNotebook: (id) => dispatch(fetchNotebook(id)),
    updateNote: (note) => dispatch(updateNote(note))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookScrollbar);

//  THIS CODE IS FOR MAKING DISTINCTION BETWEEN WHETHER TO SET SELECTED
// NOTEBOOK OR DEFAULT NOTEBOOK
//  componentWillMount() {
//    if (this.props.formType === 'homeDropDown') {
//      this.setState({value: this.props.currentNotebookTitle});
//    }
//  }