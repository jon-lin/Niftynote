import React from 'react';
import { connect } from 'react-redux';

class Tagbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    // let tags = this.props.currentNote.tags;
    // let string = '';
    //
    // tags.forEach(tag => string += tag.name);

    return (
      <div className='entireTagBar'>
        <i className="fa fa-tags" aria-hidden="true"></i>
        <input placeholder='New tag...' value={'hi'}></input>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentNote: state.currentNote
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tagbar);
