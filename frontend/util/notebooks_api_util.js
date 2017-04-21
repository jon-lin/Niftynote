export const fetchNotebooks = () => (
  $.ajax({
    method: 'GET',
    url: 'api/notebooks'
  });
);
