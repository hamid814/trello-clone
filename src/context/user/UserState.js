import React, { useReducer } from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';
import { 
  SET_CURRENT_BOARD_ID,
  CLEAR_CURRENT_BOARD_ID,
  SET_RECENT_IDS,
  SET_MODAL_IS_ON,
  SET_MODAL_TYPE
} from '../types';

const UserState = props => {
  const initialState = {
    currentBoardId: null,
    recentIds: [],
    ModalStatus: 'on',
    modalType: null
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

  const setModalStatus = (status) => {
    dispatch({
      type: SET_MODAL_IS_ON,
      payload: status
    });
    if(status === 'off') {
      clearModalType();
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

  return (
    <UserContext.Provider
      value={{
        currentBoardId: state.currentBoardId,
        recentIds: state.recentIds,
        modalStatus: state.modalStatus,
        modalType: state.modalType,
        setCurrentBoardId,
        clearCurrentBoardId,
        setModalStatus,
        setModalType
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;