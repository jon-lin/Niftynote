export const fetchNotes = () => (
  $.ajax({
    method: 'GET',
    url: 'api/notes'
  })
);
