export const fetchNotes = () => (
  $.ajax({
    method: 'GET',
    url: 'api/notes'
  })
);

export const fetchNote = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/notes/${id}`
  })
);
