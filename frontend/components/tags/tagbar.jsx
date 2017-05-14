import React from 'react';
import { connect } from 'react-redux';
import { createTags } from '../../actions/tags_actions';

class Tagbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      newTag: ""
    }
    this.removeTag = this.removeTag.bind(this);
    this.addNewTag = this.addNewTag.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.state.tags = newProps.currentNote.tags;
  }

  removeTag(e) {
    let updatedTags = this.state.tags.filter(tag => {
      return tag.id !== parseInt(e.target.value);
    });

    let updateTagsJustNames = updatedTags.map(tag => tag.name);

    this.props.createTags(updateTagsJustNames, this.props.currentNote.id);
  }

  addNewTag(e) {
    if (e.keyCode === 13) {
      let copyTags = JSON.parse(JSON.stringify(this.state.tags));
      copyTags.push({name: this.state.newTag});

      let copyTagsJustNames = copyTags.map(tag => tag.name);

      this.props.createTags(copyTagsJustNames, this.props.currentNote.id)
        .then(() => this.setState({newTag: ''}));
    }
  }

  handleChange(e) {
    this.setState({newTag: e.target.value});
  }

  render() {

    let placeholderText = 'New tag...';

    let formatTags = this.state.tags.map(tag =>
      <li key={tag.id}>
        {tag.name}
        <button value={tag.id} onClick={this.removeTag}>x</button>
      </li>
    );

    if (formatTags.length !== 0) { placeholderText = ' + '; }

    return (
      <div className='entireTagBar'>
        <i className="fa fa-tags" aria-hidden="true"></i>
        <ul className='existingTagsList'>
          {formatTags}
        </ul>
        <input
          onChange={this.handleChange}
          onKeyDown={this.addNewTag}
          value={this.state.newTag}
          placeholder={placeholderText}>
        </input>
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
    createTags: (names, noteId) => dispatch(createTags(names, noteId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tagbar);
