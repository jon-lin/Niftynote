import React from 'react';
import { connect } from 'react-redux';
import { updateNotebook }

class NotebookScrollSelector extends React.Component {
  constructor(props) {
     super(props);
     this.state = {value: this.props.notebooks[0].id};
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(e) {
     debugger
     this.setState({value: e.target.value});
   }

   handleSubmit(e) {
     this.update []
     e.preventDefault();
   }

    render() {



      return (
        <form className="NotebookScrollSelector" onSubmit={this.handleSubmit}>
           <label>
             Pick your favorite La Croix flavor:
             <select value={this.state.value} onChange={this.handleChange}>
               <option value="grapefruit">Grapefruit</option>
               <option value="lime">Lime</option>
               <option value="coconut">Coconut</option>
               <option value="mango">Mango</option>
             </select>
           </label>
           <input type="submit" value="Submit" />
         </form>
      );
    }

}



const mapStateToProps = (state) => {
  return {

    const dateComparator = (objX, objY) => (
      new Date(objY.updated_at) - new Date(objX.updated_at)
    )

    export const notesSelector = (notesObject) => {
      let sorted_arr = Object.values(notesObject).sort(dateComparator)

    notebooks: state.notebooks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotebooks: () => dispatch(fetchNotebooks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookScrollSelector);
