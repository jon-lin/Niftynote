import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { fetchAllTags } from '../../actions/tags_actions';

class TagsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newTagModalIsOpen: false };

    this.openNewTagModal = this.openNewTagModal.bind(this);
    this.closeNewTagModal = this.closeNewTagModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllTags();
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

  // if (!charRecord.includes(firstChar)) {
  //
  //   charRecord = [];
  //   charRecord.push(firstChar);
  // } else {
  //
  // }

  render() {
    let tags = this.props.tags;
    let arrOfUls = [];

    for (let i = 0; i < tags.length; i++) {
      let breakLabel = false;
      let currentTag = tags[i];
      let arrOfLis = [];
      let firstChar = currentTag.name[0];

      while (firstChar === currentTag.name[0]) {
        arrOfLis.push(
          <li className='tagItem' key={currentTag.id}>
            {currentTag.name} {currentTag.notesCount}
          </li>
        );

        i++;
        if (i >= tags.length) {
          breakLabel = true;
          break;
        }
        currentTag = this.props.tags[i];
      }

      i--;
      arrOfUls.push(<ul><li>{firstChar}</li>{arrOfLis}</ul>);

      if (breakLabel === true) { break; }
    }


    // this.props.tags.map(tag, idx => {
    //
    //                 let currentTag = tag;
    //                 let arrOfLis = [];
    //                 let firstChar = tag.name.slice(1);
    //
    //                 while (firstChar === currentTag.name.slice(1)) {
    //                   arrOfLis.push(
    //                     <li className='tagItem' key={currentTag.id}>
    //                       {currentTag.name} {currentTag.notesCount}
    //                     </li>
    //                   );
    //                   currentTag = this.props.tags[idx + 1];
    //                 }
    //
    //                 return (
    //
    //                         );
    //               });

    return(
      <div className="tagsIndexCol">

        <div className="TagsIndexColTopBar">

          <div className="TagsIndexColTopBarTopRow">
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

// <NewTag
//   closeNewTagModal={this.closeNewTagModal}
//   closeTagsIndexModal={this.props.closeTagsIndex}
//   />

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
    fetchAllTags: () => dispatch(fetchAllTags())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TagsIndex);
