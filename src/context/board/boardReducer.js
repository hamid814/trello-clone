import {
  ADD_BOARD,
  SET_TITLE,
  SET_STAR,
  SET_DESCRIBTION,
  ADD_LIST,
  ADD_CARD,
  UPDATE_CARD
 } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_BOARD:
      return {
        ...state,
        boards: [...state.boards, action.payload]
      }
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
          if(b.id === action.payload.id) {
            b.starred = !b.starred
          }
          return b
        }),
        listOfStarredBoardsIds: action.payload.newListOfStarredBoardsIds
      }
    case SET_DESCRIBTION:
      return {
        ...state,
        boards: state.boards.map(b => {
          if(b.id === action.payload.id) {
            b.describtion = action.payload.text
          }
          return b
        })
      }
    case ADD_LIST:
      return {
        ...state,
        boards: state.boards.map(b => {
          if(b.id === action.payload.id) {
            b.lists.push(action.payload.newList)
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
                l.items.push(action.payload.newCard);
              }
              return l
            })
          }
          return b
        })
      }
    case UPDATE_CARD:
      return {
        ...state,
        boards: state.boards.map(board => {
          if(board.id === action.payload.boardId) {
            board.lists = board.lists.map(list => {
              if(list.id === action.payload.listId) {
                list.items = list.items.map(item => (
                  item.id === action.payload.cardId ? action.payload.newCard : item
                ))
              }
              return list
            })
          }
          return board
        })
      }
    default:
      return state;
  }
};
