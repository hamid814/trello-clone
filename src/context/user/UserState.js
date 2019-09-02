import React, { useReducer } from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';
import { 
  SET_CURRENT_BOARD_ID,
  CLEAR_CURRENT_BOARD_ID,
  SET_RECENT_IDS
} from '../types';

const UserState = props => {
  const initialState = {
    currentBoardId: null,
    recentIds: []
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  // Get data
  // eslint-disable-next-line
  const getData = () => {
    dispatch({
      type: null,
      payload: 'new test'
    });
  };

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

  return (
    <UserContext.Provider
      value={{
        currentBoardId: state.currentBoardId,
        recentIds: state.recentIds,
        setCurrentBoardId,
        clearCurrentBoardId,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;