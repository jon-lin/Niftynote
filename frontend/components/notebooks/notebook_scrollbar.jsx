import React from 'react';
import { connect } from 'react-redux';
import { fetchNotebooks, fetchNotebook } from '../../actions/notebooks_actions';
import { updateNote } from '../../actions/notes_actions';
import { Link, withRouter } from 'react-router';
import NotebookItem from './notebook_item';

class NotebookScrollbar extends React.Component {
  constructor(props) {
     super(props);
     this.state = {value: this.props.selectedNotebook.id};
     this.handleChange = this.handleChange.bind(this);
    //  this.createNewNotebook = this.createNewNotebook.bind(this);
   }

   componentDidMount() {
     this.props.fetchNotebooks();
   }

    componentWillReceiveProps(newProps) {
        this.setState({
          value: newProps.selectedNotebook.id
        });
    }

    // createNewNotebook() {
    //   console.log("hello");
    // }

   handleChange(e) {
     if (e.target.value === "Create new notebook") {
       this.props.router.push('/newnotebook');
     } else if (e.target.value === "Move your note into another notebook or make a new one") {
       return null;
     }
       else {
         this.setState({value: e.target.value});
         this.props.updateNote({id: this.props.currentNote.id, notebook_id: e.target.value});
       }
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
               <select id="soflow-color" value={this.state.value} onChange={this.handleChange}>
                 <option default >
                   Move your note into another notebook or make a new one
                 </option>

                 <option value="Create new notebook">
                   Create new notebook
                 </option>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotebookScrollbar));

//  THIS CODE IS FOR MAKING DISTINCTION BETWEEN WHETHER TO SET SELECTED
// NOTEBOOK OR DEFAULT NOTEBOOK
//  componentWillMount() {
//    if (this.props.formType === 'homeDropDown') {
//      this.setState({value: this.props.currentNotebookTitle});
//    }
//  }
