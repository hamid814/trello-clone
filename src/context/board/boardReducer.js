import { 
  SET_STAR,
  SET_DESCRIPTION
 } from '../types';

export default (state, action) => {
  switch (action.type) {
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
            b.description = action.payload.newDesc
          }
          return b
        })
      }
    default:
      return state;
  }
};
