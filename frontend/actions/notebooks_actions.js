import * as NotebooksAPIUtil from '../util/notebooks_api_util'

export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';

export const receiveNotebooks = (notebooks) => (
  {
    type: RECEIVE_NOTEBOOKS,
    notebooks
  }
);

export const fetchNotebooks = () => dispatch => {
  return NotebooksAPIUtil.fetchNotebooks()
    .then(notebooks => dispatch(receiveNotebooks(notebooks)))
};
