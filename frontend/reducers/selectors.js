// sort by most recently UPDATED
const dateComparator = (objX, objY) => (
  new Date(objY.updated_at) - new Date(objX.updated_at)
)

export const notesSelector = (notesObject) => {
  let sorted_arr = Object.values(notesObject).sort(dateComparator)

  sorted_arr.forEach(noteObj => {
    let time_diff = Math.floor(
      (Date.now() - new Date(noteObj['updated_at']))/1000
    )

    if (time_diff < 60) {
        noteObj['time_passed'] = time_diff + " seconds ago";
    } else if (Math.floor(time_diff/60) < 60) {
        noteObj['time_passed'] = Math.floor(time_diff/60) + " minutes ago";
    } else if (Math.floor(time_diff/60/60) < 24) {
        noteObj['time_passed'] = Math.floor(time_diff/60/60) + " hours ago";
    } else if (Math.floor(time_diff/60/60/24) < 8) {
        noteObj['time_passed'] = Math.floor(time_diff/60/60/24) + " days ago";
      }
      else {
        noteObj['time_passed'] = new Date(noteObj['updated_at']).toLocaleDateString();
      }
  });

  return sorted_arr;
}


// noteObj['created_at'] = new Date(noteObj['created_at']).toLocaleString();
// noteObj['updated_at'] = new Date(noteObj['updated_at']).toLocaleString();
