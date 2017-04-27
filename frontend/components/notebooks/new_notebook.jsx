import React from 'react';
import { createNotebook } from '../../actions/notebooks_actions';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router';

class NewNotebook extends React.Component {
  constructor(props) {
    super(props);
    this.createNotebook = this.createNotebook.bind(this);
    this.receiveTitle = this.receiveTitle.bind(this);
    this.state = {title: ""};
  }

  createNotebook() {
    this.props.createNotebook(this.state)
      .then(this.props.closeNewNotebookModal)
  }

  receiveTitle(e) {
    this.setState({title: e.currentTarget.value});
  }

  render() {
    return (
      <div>
        <div className="newNoteHeader">
          <i className="fa fa-book" aria-hidden="true"></i>
          <h1>Create Notebook</h1>
        </div>
        <input value={this.state.title} onChange={this.receiveTitle} placeholder="Title your notebook" type="text"></input>
        <div className="buttons">
          <button onClick={this.props.closeNewNotebookModal}>Cancel</button>
          <button onClick={this.createNotebook}>Create notebook</button>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    notebooks: Object.values(state.notebooks)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNotebook: (notebook) => dispatch(createNotebook(notebook))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewNotebook);

//interesting experiment with .then and setTimeout

// const delayFunc = (time) => {
//   return new Promise(function(resolve) {
//     setTimeout(resolve, time)
//   });
// }

// .then(
//   () => {
//   let that = this;
//   return delayFunc(2000)
//     .then(() => {
//       that.props.closeNewNotebookModal;
//       that.props.router.push(`/home/notebooks/3`);
//     });
// }
// )

//this is kind of not working
// this.props.router.push(`/home/notebooks/${this.props.notebooks[this.props.notebooks.length-1].id}`)
  // .then(this.props.router.push(`/home/notebooks/${this.props.notebooks[this.props.notebooks.length-1].id}`))
// <form onSubmit={this.createNotebook}>
//
//
//forms don't work in react components!!!
// </form>
// <button onClick={this.props.closeModal}>Cancel</button>
