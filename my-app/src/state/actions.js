import { ActionTypes } from './actions-types';
import store from './store';

function addNotes(payload) {
    return {
      type: ActionTypes.ADD_NEW_NOTES,
      payload: payload
    }
}
function updateNotes(payload) {
  return {
    type: ActionTypes.UPDATE_NOTES,
    payload: payload
  }
}
function deleteNotes(payload) {
  return {
    type: ActionTypes.DELETE_NOTE,
    payload: payload
  }
}
const boundAddNotes = payload => store.dispatch(addNotes(payload));
const boundUpdateNotes = payload => store.dispatch(updateNotes(payload));
const boundDeleteNotes = payload => store.dispatch(deleteNotes(payload));
const boundActions = {
  boundAddNotes, boundUpdateNotes, boundDeleteNotes
}
export default boundActions;