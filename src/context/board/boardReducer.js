import {
  SET_TITLE,
  SET_STAR,
  SET_DESCRIPTION,
  ADD_CARD
 } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        baords: state.boards.map(b => {
          if(b.id === action.payload.id) {
            b.title = action.payload.text
          }
          return b
        })
      }
    case SET_STAR:
      return {
        ...state,
        boards: state.boards.map(b => {
          if(b.id === action.payload) {
            b.starred = !b.starred
          }
          return b
        })
      }
    case SET_DESCRIPTION:
      return {
        ...state,
        boards: state.boards.map(b => {
          if(b.id === action.payload.id) {
            b.description = action.payload.text
          }
          return b
        })
      }
    case ADD_CARD:
      return {
        ...state,
        boards: state.boards.map(b => {
          if(b.id === action.payload.boardId) {
            b.lists = b.lists.map(l => {
              if(l.id === action.payload.listId) {
                l.items = [...l.items, action.payload.text]
              }
              return l
            })
          }
          return b
        })
      }
    default:
      return state;
  }
};
