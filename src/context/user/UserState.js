import React, { useReducer } from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';
import { 
  SET_CURRENT_BOARD_ID,
  CLEAR_CURRENT_BOARD_ID
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
    const newRecentIds = state.recentIds;
    if(newRecentIds.length === 3) {
      newRecentIds.shift();
      newRecentIds.push(id);
    } else {
      newRecentIds.push(id);
    }
    console.log(newRecentIds);
    dispatch({
      type: SET_CURRENT_BOARD_ID,
      payload: id
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
        setCurrentBoardId,
        clearCurrentBoardId
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;