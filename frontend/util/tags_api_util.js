export const fetchAllTags = () => (
  $.ajax({
    method: 'GET',
    url: 'api/tags'
  })
);

export const fetchIndividualNoteTags = (note_id) => (
  $.ajax({
    method: 'GET',
    url: 'api/tags/1',
    data: {tag: {note_id: note_id}}
  })
);

// $.ajax({method: 'GET', url: 'api/tags/1', data: {tag: {note_id: X}}})

export const createTags = (names, note_id) => (
  $.ajax({
    method: 'POST',
    url: `api/tags`,
    data: { tag: {
        names: JSON.stringify(names),
        note_id: note_id
      }
    }
  })
);

// $.ajax({
//     method: 'POST',
//     url: 'api/tags',
//     data: {tag: {names: JSON.stringify(
//       ['tag1', 'tag2', 'tag3', 'yetanothernewtag']
//     ), note_id: 1}}
// })

export const updateTag = (tagId, names) => (
  $.ajax({
    method: 'PATCH',
    url: `api/tags/${tagId}`,
    data: {tag: {names: JSON.stringify(names)}}
  })
);

// $.ajax({method: 'PATCH',
// url: 'api/tags/11',
// data: {tag: {names: JSON.stringify(['tag1'])}} })
// .then(succ => console.log(succ), fail => console.log('fail'))
// in react, you're going to want to GET INDEX to refresh after you update taggings

export const deleteTag = (tagId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/tags/${tagId}`
  })
);

// $.ajax({method: 'DELETE',
// url: 'api/tags/2'})
// then(deleted_tag => console.log(deleted_tag))
