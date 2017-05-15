import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { fetchAllTags, deleteTag } from '../../actions/tags_actions';

class TagsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newTagModalIsOpen: false };

    this.openNewTagModal = this.openNewTagModal.bind(this);
    this.closeNewTagModal = this.closeNewTagModal.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openNewTagModal() {
    this.setState({newTagModalIsOpen: true});
  }

  closeNewTagModal() {
    this.setState({newTagModalIsOpen: false});
  }

  handleUpdate(e) {
    debugger
    let tagId = parseInt(e.currentTarget.getAttribute('value'));

    $(e.currentTarget);
  }

  render() {
    let tags = this.props.tags;
    let arrOfUls = [];

    function randomString(length, chars) {
      let result = '';
      for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    }

    for (let i = 0; i < tags.length; i++) {
      let breakLabel = false;
      let currentTag = tags[i];
      let arrOfLis = [];
      let firstChar = currentTag.name[0];

      while (firstChar === currentTag.name[0]) {
        let tagId = currentTag.id;
        arrOfLis.push(
          <div className='tagItem' key={currentTag.id}>
            <div id={tagId + 'changeDOMEl'} className='tagItemText'>
              <text className='tagIndexItemTagName'>{currentTag.name}</text>
              <text className='tagIndexItemNotesCount'>{currentTag.notesCount}</text>
            </div>
            <div className='tagItemButtons'>
              <i value={tagId} onClick={this.handleUpdate} className="fa fa-pencil" aria-hidden="true"></i>
              <i onClick={() => this.props.deleteTag(tagId)} className="fa fa-trash" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
          </div>
        );

        i++;
        if (i >= tags.length) {
          breakLabel = true;
          break;
        }
        currentTag = this.props.tags[i];
      }

      i--;
      let rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
      arrOfUls.push(
        <ul key={rString} className='tagsIndexAlphabetBlock'>
          <li className='tagsIndexLetterHeader'>{firstChar}</li>
          {arrOfLis}
        </ul>
      );

      if (breakLabel === true) { break; }
    }

    return(
      <div className="tagsIndexCol">

        <div className="tagsIndexColTopBar">

          <div className="tagsIndexColTopBarTopRow">
            <text>TAGS</text>
            <button onClick={this.openNewTagModal}>
              <i className="fa fa-tags" aria-hidden="true"></i>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>

          <div className="tagsSearchField">
            <input type="search" placeholder="Find a tag" results="0"></input>
          </div>

        </div>

        <div className="tagsListContainer">
          <ul className="tagsList">
            {arrOfUls}
          </ul>
        </div>

        <Modal
              isOpen={this.state.newTagModalIsOpen}
              onRequestClose={this.closeNewTagModal}
              contentLabel="newTag"
              className="newTagModal"
              style={{overlay: {backgroundColor: 'white'}}}
              shouldCloseOnOverlayClick={false}
            >

          </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let alphabetizeComparator = (tagObj1, tagObj2) => {
    if (tagObj1.name > tagObj2.name) { return 1; }
    else if (tagObj1.name < tagObj2.name) { return -1; }
    else { return 0; }
  }

  return {
    tags: Object.values(state.tags).sort(alphabetizeComparator),
    closeTagsIndex: ownProps.closeTagsIndex
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllTags: () => dispatch(fetchAllTags()),
    deleteTag: (tagId) => dispatch(deleteTag(tagId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TagsIndex);
