import React from 'react';
import { connect } from 'react-redux';
import { updateNotebook, fetchNotebooks, fetchNotebook } from '../../actions/notebooks_actions';
import { Link } from 'react-router';
import Notebook from './notebook';

class NotebookScrollSelector extends React.Component {
  constructor(props) {
     super(props);
     this.state = {};
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   componentDidMount() {
     this.props.fetchNotebooks();
   }

   componentWillMount() {
     if (this.props.formType === 'homeDropDown') {
       this.setState(this.props.currentNote.notebook_id)
     }
   }

    // componentWillReceiveProps(newProps) {
    //   if (this.newProps.currentNote) {
    //     this.props.fetchNotebook(this.newProps.currentNote.notebookId);
    //   }
    // }

   handleChange(e) {
     debugger
     this.setState({value: e.target.value});
   }

   handleSubmit(e) {
     e.preventDefault();
     debugger

     this.props.updateNotebook({

      });
   }

    render() {
      let notebooksList = this.props.notebooks.map( notebook => {
        return (<Notebook formType="dropdown"
                          title={notebook.title}
                          notebookId={notebook.id}
                          key={notebook.id}/>);
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

  return {
    notebooks: sorted_notebooks_arr,
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
