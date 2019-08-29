import { 
  SET_STAR
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
    default:
      return state;
  }
};
