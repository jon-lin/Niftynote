import React from 'react';
import { connect } from 'react-redux';
import { updateNotebook, fetchNotebooks, fetchNotebook } from '../../actions/notebooks_actions';
import { Link } from 'react-router';
import Notebook from './notebook';

class NotebookScrollSelector extends React.Component {
  constructor(props) {
     super(props);
     this.state = {value: this.props.selectedNotebook.title};
     this.handleChange = this.handleChange.bind(this);
   }

   componentDidMount() {
     this.props.fetchNotebooks();
   }

  //  THIS CODE IS FOR MAKING DISTINCTION BETWEEN WHETHER TO SET SELECTED
  // NOTEBOOK OR DEFAULT NOTEBOOK
  //  componentWillMount() {
  //    if (this.props.formType === 'homeDropDown') {
  //      this.setState({value: this.props.currentNotebookTitle});
  //    }
  //  }

    componentWillReceiveProps(newProps) {
      // if (jQuery.isEmptyObject(newProps.currentNote)) { return null }

        this.setState({
          value: newProps.selectedNotebook.title
        });
    }

   handleChange(e) {
     this.setState({value: e.target.value});
     let { id, title, body } = this.props.selectedNotebook;
     this.props.updateNotebook({ id, title, body });
     console.log("Notebook was updated!")
   }

    render() {
      let notebooksList = this.props.sortedNotebooks.map( notebook => {
        return (<Notebook formType="dropdown"
                          title={notebook.title}
                          key={notebook.id}/>)
                });

      return (
        <div className="notebookScrollSelector">
          <div className="searchField">
            <input type="search" placeholder="Find a notebook" results="0"></input>
          </div>

          <div value="Create new notebook"></div>

          <form className="NotebookScrollSelector" onSubmit={this.handleSubmit}>
             <label>
               Notebooks:
               <select value={this.state.value} onChange={this.handleChange}>
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

  let currentNotebook = state.notebooks[state.currentNote.notebookId]

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
    updateNotebook: (notebook) => dispatch(updateNotebook(notebook))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookScrollSelector);
