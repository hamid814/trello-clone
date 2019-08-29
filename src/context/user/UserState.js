import React, { useReducer } from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';
import { 
  SET_CURRENT_BOARD_ID,
  TEST
} from '../types';

const UserState = props => {
  const initialState = {
    currentBoardId: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  // Get data
  // eslint-disable-next-line
  const getData = () => {
    dispatch({
      type: TEST,
      payload: 'new test'
    });
  };

  const setCurrentBoardId = (id) => {
    dispatch({
      type: SET_CURRENT_BOARD_ID,
      payload: id
    });
  }

  return (
    <UserContext.Provider
      value={{
        currentBoardId: state.currentBoardId,
        setCurrentBoardId
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;