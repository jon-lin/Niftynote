import * as NotebooksAPIUtil from '../util/notebooks_api_util'

export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';

export const receiveNotebooks = (notebooks) => (
  {
    type: RECEIVE_NOTEBOOKS,
    notebooks
  }
);

export const receiveNotebook = (notebook) => (
  {
    type: RECEIVE_NOTEBOOK,
    notebook
  }
);

export const removeNotebook = (notebook) => (
  {
    type: REMOVE_NOTEBOOK,
    notebook
  }
);

export const fetchNotebooks = () => dispatch => {
  return NotebooksAPIUtil.fetchNotebooks()
    .then(notebooks => dispatch(receiveNotebooks(notebooks)))
};

export const fetchNotebook = (id) => dispatch => {
  return NotebooksAPIUtil.fetchNotebook(id)
    .then(notebook => dispatch(receiveNotebook(notebook)))
};


export const createNotebook = (notebook) => dispatch => {
  return NotebooksAPIUtil.createNotebook(notebook)
    .then(notebook => {
      dispatch(receiveNotebook(notebook));
    });
};

export const updateNotebook = (notebook) => dispatch => {
  return NotebooksAPIUtil.updateNotebook(notebook)
    .then(notebook => {
      dispatch(receiveNotebook(notebook));
    });
};

export const deleteNotebook = (id) => dispatch => {
  return NotebooksAPIUtil.deleteNotebook(id)
    .then(
      notebook => dispatch(removeNotebook(notebook)))
      // errors => {
      //   debugger
      //   console.log(errors)
      // })
};
