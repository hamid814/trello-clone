import { 
  SET_CURRENT_BOARD_ID,
  CLEAR_CURRENT_BOARD_ID,
  TEST
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        test: action.payload
      }
    case SET_CURRENT_BOARD_ID:
     return {
       ...state,
       currentBoardId: action.payload
     }
    case CLEAR_CURRENT_BOARD_ID:
      return {
        ...state,
        currentBoardId: null
      }
    default:
      return state;
  }
};