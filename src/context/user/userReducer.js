import { 
  SET_CURRENT_BOARD_ID,
  CLEAR_CURRENT_BOARD_ID,
  SET_RECENT_IDS,
  SET_MODAL_IS_ON,
  SET_MODAL_TYPE
} from '../types';

export default (state, action) => {
  switch (action.type) {
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
    case SET_RECENT_IDS:
      return {
        ...state,
        recentIds: action.payload
      }
    case SET_MODAL_IS_ON:
      return {
        ...state,
        modalStatus: action.payload
      }
    case SET_MODAL_TYPE:
      return {
        ...state,
        modalType: action.payload
      }
    default:
      return state;
  }
};