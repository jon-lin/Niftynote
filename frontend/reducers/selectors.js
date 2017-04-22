//sort by most recently UPDATED
const dateComparator = (objX, objY) => (
  new Date(objY.updated_at) - new Date(objX.updated_at)
)

export const notesSelector = (noteObject) => {
  let sorted_arr = Object.values(noteObject).sort(dateComparator)

  sorted_arr.forEach(noteObj => {
    noteObj['created_at'] = new Date(noteObj['created_at']).toLocaleString();
    noteObj['updated_at'] = new Date(noteObj['updated_at']).toLocaleString();
  });

  return sorted_arr;
}
