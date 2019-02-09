import initialState from './default-state';
import { ActionTypes } from './actions-types';

function Reducer(state = initialState, action) {
    switch (action.type) {
      case ActionTypes.ADD_NEW_NOTES:
        const noteId = state.idIncrement + 1;
        const newPayload = {...action.payload, noteId};
        return Object.assign({}, state, {
            idIncrement: noteId,
            notesList: [...state.notesList, newPayload]
        })

    case ActionTypes.UPDATE_NOTES:
        let newNoteList = [...state.notesList];
        newNoteList.forEach((item) => {
            if(item.noteId === action.payload.noteId) {
                item.body = action.payload.body;
                item.title = action.payload.title;
            }
        })
        return Object.assign({}, state, {
            notesList: [...newNoteList]
        });
        return state
    case ActionTypes.DELETE_NOTE:
        let filteredState = state.notesList.filter((item) => item.noteId !== action.payload.noteId)
        return Object.assign({}, state, {
            notesList: [...filteredState]
        });
      default:
        return state
    }
}
export default Reducer;