import React from 'react';
import { connect } from 'react-redux';
import { updateNotebook, fetchNotebooks, fetchNotebook } from '../../actions/notebooks_actions';
import { Link } from 'react-router';
import Notebook from './notebook';

class NotebookScrollSelector extends React.Component {
  constructor(props) {
     super(props);
     this.state = {value: this.props.currentNote.title};
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
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
      if (jQuery.isEmptyObject(newProps.currentNote)) { return null }

        this.setState({
          value: this.props.currentNotebookTitle
        });
    }

   handleChange(e) {
     this.setState({value: e.target.value});
   }

   handleSubmit(e) {
     e.preventDefault();
     debugger
     this.props.updateNotebook({

      });
   }

    render() {
      // debugger
      // if (typeof this.props.sortedNotebooks === 'undefined') {return null}

      let notebooksList = this.props.sortedNotebooks.map( notebook => {
        return (<Notebook formType="dropdown"
                          title={notebook.title}
                          key={notebook.id}/>)
                });

      debugger

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
             <input type="submit" value="Submit" />
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
  let currentNotebookTitle = currentNotebook ? currentNotebook.title: ""

  return {
    sortedNotebooks: sorted_notebooks_arr,
    currentNotebookTitle: currentNotebookTitle,
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
