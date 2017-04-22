// sort by most recently UPDATED
const dateComparator = (objX, objY) => (
  new Date(objY.updated_at) - new Date(objX.updated_at)
)

export const notesSelector = (notesObject) => {
  let sorted_arr = Object.values(notesObject).sort(dateComparator)

  sorted_arr.forEach(noteObj => {
    let seconds = Math.floor((Date.now() - new Date(noteObj['updated_at']))/1000),
        minutes = Math.floor(seconds/60),
        hours = Math.floor(minutes/60),
        days = Math.floor(hours/24)

    if (seconds < 2) {
        noteObj['time_passed'] = seconds + " second ago";
    } else if (seconds < 60) {
        noteObj['time_passed'] = seconds + " seconds ago";
    } else if (minutes < 2) {
        noteObj['time_passed'] = minutes + " minute ago";
    } else if (minutes < 60) {
        noteObj['time_passed'] = minutes + " minutes ago";
    } else if (hours < 2) {
        noteObj['time_passed'] = hours + " hour ago";
    } else if (hours < 24) {
        noteObj['time_passed'] = hours + " hours ago";
    } else if (days < 2) {
        noteObj['time_passed'] = days + " day ago";
    } else if (days < 8) {
        noteObj['time_passed'] = days + " days ago";
    } else {
        noteObj['time_passed'] = new Date(noteObj['updated_at']).toLocaleDateString();
    }
  });

  return sorted_arr;
}


// noteObj['created_at'] = new Date(noteObj['created_at']).toLocaleString();
// noteObj['updated_at'] = new Date(noteObj['updated_at']).toLocaleString();
