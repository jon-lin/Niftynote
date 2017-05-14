import React from 'react';
import { connect } from 'react-redux';

class Tagbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    }
  }

  componentWillReceiveProps(newProps) {
    this.state.tags = newProps.currentNote.tags
  }

  render() {

    let placeholderText = 'New tag...';
    let formatTags = this.state.tags.map(tag => <li>{tag.name}</li>);
    if (formatTags.length !== 0) { placeholderText = '+'; }

    return (
      <div className='entireTagBar'>
        <i className="fa fa-tags" aria-hidden="true"></i>
        <ul className='existingTagsList'>
          {formatTags}
        </ul>
        <input placeholder={placeholderText}></input>
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
