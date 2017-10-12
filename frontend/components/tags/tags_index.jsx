import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchAllTags, deleteTag, updateTag } from '../../actions/tags_actions';
import { fetchNote } from '../../actions/notes_actions';

class TagsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newTagModalIsOpen: false, tagText: '', tagId: null };

    this.openNewTagModal = this.openNewTagModal.bind(this);
    this.closeNewTagModal = this.closeNewTagModal.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.openTagShowPage = this.openTagShowPage.bind(this);
    this.blurAnimation = this.blurAnimation.bind(this);
    this.enterKeystrokeUpdateNote = this.enterKeystrokeUpdateNote.bind(this);
    this.manualSaveTag = this.manualSaveTag.bind(this);
    this.removeTag = this.removeTag.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentDidMount() {
    $('.fa-check').css('display', 'none');
    let that = this;
    $('.tagItemInput').each(function() {
      $('#' + this.id).attr('size', this.placeholder.length + 1);
      // this.setAttribute('size', this.placeholder.length + 1);
      $('#' + this.id).on('click', that.openTagShowPage);
      $('#' + this.id).on('focus', () => $('#' + this.id).animate({width: '300px'}, 500, 'linear'));
      $('#' + this.id).on('keypress', that.enterKeystrokeUpdateNote);
      $('#' + this.id).on('blur', that.blurAnimation);
    });
  }

  openNewTagModal() {
    this.setState({newTagModalIsOpen: true});
  }

  closeNewTagModal() {
    this.setState({newTagModalIsOpen: false});
  }

  removeTag(e) {
    let tagId = parseInt(e.currentTarget.getAttribute('value'));
    this.props.deleteTag(tagId)
      .then(() => {
            let that = this;
            $('.fa-check').css('display', 'none');
            return $('.tagItemInput').each(function() {
                      $('#' + this.id).attr('size', this.placeholder.length + 1);
                      $('#' + this.id).on('click', that.openTagShowPage);
                      $('#' + this.id).on('focus', () => $('#' + this.id).animate({width: '300px'}, 500, 'linear'));
                      $('#' + this.id).on('keypress', that.enterKeystrokeUpdateNote);
                      $('#' + this.id).on('blur', that.blurAnimation);
                    });
                  }
                );
  }

  openTagShowPage(e) {
    this.props.closeTagsIndex();
    this.props.router.push(`/home/tags/` + e.target.id);
  }

  handleUpdateClick(e) {
    let tagId = parseInt(e.currentTarget.getAttribute('value'));
    $('#' + tagId).off('click');
    let placeholderText = $('#' + tagId)[0].placeholder;
    $('#' + tagId).prop('value', placeholderText);
    $(`.fa-check.${tagId}`).css('display', 'inherit');
    $(`.fa-trash.${tagId}, .fa-pencil.${tagId}`).css('visibility', 'hidden');
    $(`.tagitemNotesCount.${tagId}`).toggle();
  }

  manualSaveTag(e) {
    let tagId = parseInt(e.currentTarget.getAttribute('value'));
    let eventToPass = {target: {id: tagId, placeholder: $('#' + tagId)[0].placeholder, value: $('#' + tagId).val()}};
    this.blurAnimation(eventToPass);
  }

  enterKeystrokeUpdateNote(e) {
    if (e.which === 13) { this.blurAnimation(e); }
  }

  blurAnimation(e) {
    let textLength;

    $('#' + e.target.id).on('click', this.openTagShowPage);

    if (e.target.placeholder === e.target.value || e.target.value === '') {
      textLength = (e.target.value === '') ? e.target.placeholder.length : e.target.value.length
      $('#' + e.target.id).animate(
        {width: `${textLength * 8}px`, margin: '0px 3px 0px 0px'}
        , 500, 'linear', () => {
          $(`.tagitemNotesCount.${e.target.id}`).toggle();
          $(`.fa-check.${e.target.id}`).css('display', 'none');
          $(`.fa-trash.${e.target.id}, .fa-pencil.${e.target.id}`).css('visibility', 'visible');
        })
    } else {
      textLength = e.target.value.length;
      $('#' + e.target.id).animate(
        {width: `${textLength * 8}px`, margin: '0px 3px 0px 0px'}
        , 500, 'linear',
        () => this.props.updateTag(e.target.id, [e.target.value])
                .then(() => this.props.fetchAllTags())
                .then(() => this.props.fetchNote(this.props.currentNote.id))
                .then(() => {
                      let that = this;
                      $('.fa-check').css('display', 'none');
                      return $('.tagItemInput').each(function() {
                                $('#' + this.id).attr('size', this.placeholder.length + 1);
                                $('#' + this.id).on('click', that.openTagShowPage);
                                $('#' + this.id).on('focus', () => $('#' + this.id).animate({width: '300px'}, 500, 'linear'));
                                $('#' + this.id).on('keypress', that.enterKeystrokeUpdateNote);
                                $('#' + this.id).on('blur', that.blurAnimation);
                              });
                            }
                          )
      );
    }
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
        let currentTagName = currentTag.name;
        arrOfLis.push(
          <div className={`tagItem ` + tagId} key={currentTag.id}>
            <div className='tagItemInputContainer'>
              <div className='tagItemInputAndCount'>
                <input
                  id={tagId}
                  size="20"
                  type='text'
                  className='tagItemInput'
                  placeholder={currentTag.name}>
                </input>
                <div className={'tagitemNotesCount' + ' ' + tagId}>{currentTag.notesCount}</div>
              </div>
            </div>
            <div className='tagItemButtons'>
              <i value={tagId} onClick={this.manualSaveTag} className={`fa fa-check ` + tagId} aria-hidden="true"></i>
              <label htmlFor={tagId}><i value={tagId} onClick={this.handleUpdateClick} className={`fa fa-pencil ` + tagId}  aria-hidden="true"></i></label>
              <i value={tagId} onClick={this.removeTag} className={`fa fa-trash ` + tagId} aria-hidden="true"></i>
              <i className={`fa fa-star ` + tagId} aria-hidden="true"></i>
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
    closeTagsIndex: ownProps.closeTagsIndex,
    currentNote: state.currentNote
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllTags: () => dispatch(fetchAllTags()),
    deleteTag: (tagId) => dispatch(deleteTag(tagId)),
    updateTag: (tagId, names) => dispatch(updateTag(tagId, names)),
    fetchNote: (id) => dispatch(fetchNote(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TagsIndex));
