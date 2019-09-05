import { 
  SET_CURRENT_BOARD_ID,
  CLEAR_CURRENT_BOARD_ID,
  SET_CURRENT_LIST_ID,
  CLEAR_CURRENT_LIST_ID,
  SET_CURRENT_CARD,
  CLEAR_CURRENT_CARD,
  SET_RECENT_IDS,
  SET_MODAL,
  SET_MODAL_TYPE,
  SET_OPTIONS_MODAL,
  SET_OPTIONS_MODAL_TYPE,
  SET_FAST_EDIT_MODAL_POS,
  SET_MOUSE_POS
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
    case SET_CURRENT_LIST_ID:
      return {
        ...state,
        currentListId: action.payload
      }
    case CLEAR_CURRENT_LIST_ID:
      return {
        ...state,
        currentListId: null
      }
    case SET_CURRENT_CARD:
      return {
        ...state,
        currentCard: action.payload
      }
    case CLEAR_CURRENT_CARD:
      return {
        ...state,
        currentCard: null
      }
    case SET_RECENT_IDS:
      return {
        ...state,
        recentIds: action.payload
      }
    case SET_MODAL:
      return {
        ...state,
        modalStatus: action.payload
      }
    case SET_MODAL_TYPE:
      return {
        ...state,
        modalType: action.payload
      }
    case SET_OPTIONS_MODAL:
      return {
        ...state,
        optionsModalStatus: action.payload
      }
    case SET_OPTIONS_MODAL_TYPE:
      return {
        ...state,
        optionsModalType: action.payload
      }
    case SET_FAST_EDIT_MODAL_POS:
      return {
        ...state,
        fastEditModalPos: action.payload
      }
    case SET_MOUSE_POS:
      return {
        ...state,
        mousePos: action.payload  
      }
    default:
      return state;
  }
};