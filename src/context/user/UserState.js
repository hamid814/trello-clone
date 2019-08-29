import React, { useReducer } from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';
import { 
  TEST
} from '../types';

const UserState = props => {
  const initialState = {
    test: 'test !!!',
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  // Get data
  const getData = () => {
    dispatch({
      type: TEST,
      payload: 'new test'
    });
  };

  return (
    <UserContext.Provider
      value={{
        test: state.test,
        getData
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;