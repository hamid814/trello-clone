import React, { useReducer } from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';
import { 
  SET_CURRENT_BOARD_ID,
  CLEAR_CURRENT_BOARD_ID,
  SET_CURRENT_CARD,
  CLEAR_CURRENT_CARD,
  SET_RECENT_IDS,
  SET_MODAL,
  SET_MODAL_TYPE,
  SET_FAST_EDIT_MODAL_POS
} from '../types';

const UserState = props => {
  const initialState = {
    currentBoardId: null,
    currentCard: null,
    recentIds: [],
    ModalStatus: 'off',
    modalType: null,
    fastEditModalPos: null
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const setCurrentBoardId = (id) => {
    dispatch({
      type: SET_CURRENT_BOARD_ID,
      payload: id
    });
    setRecentBaord(id);
  }

  // set new board to recent
  const setRecentBaord = (id) => {
    const newRecentIds = state.recentIds;
    if(newRecentIds.length === 3 && id !== null) {
      newRecentIds.shift();
      newRecentIds.push(id);
    } else if(id !== null) {
      newRecentIds.push(id);
    }
    dispatch({
      type: SET_RECENT_IDS,
      payload: newRecentIds
    });
  }

  // also can be done with "setCurrentBoardId(null)"
  const clearCurrentBoardId = () => {
    dispatch({
      type: CLEAR_CURRENT_BOARD_ID
    });
  }

  const setCurrentCard = (card) => {
    dispatch({
      type: SET_CURRENT_CARD,
      payload: card
    });
  }

  const clearCurrentCard = () => {
    dispatch({
      type: CLEAR_CURRENT_CARD
    });
  }

  const setModal = (status, type) => {
    dispatch({
      type: SET_MODAL,
      payload: status
    });
    if(status === 'off') {
      clearModalType();
    } if(status === 'on') {
      setModalType(type);
    }
  }

  const setModalType = (type) => {
    dispatch({
      type: SET_MODAL_TYPE,
      payload: type
    });
  }

  const clearModalType = () => {
    dispatch({
      type: SET_MODAL_TYPE,
      payload: null
    });
  }

  const setFastEditModalPos = (pos) => {
    dispatch({
      type: SET_FAST_EDIT_MODAL_POS,
      payload: pos
    });
  }

  return (
    <UserContext.Provider
      value={{
        currentBoardId: state.currentBoardId,
        currentCard: state.currentCard,
        recentIds: state.recentIds,
        modalStatus: state.modalStatus,
        modalType: state.modalType,
        fastEditModalPos: state.fastEditModalPos,
        setCurrentBoardId,
        clearCurrentBoardId,
        setCurrentCard,
        clearCurrentCard,
        setModal,
        setFastEditModalPos,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;