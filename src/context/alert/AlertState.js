import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { 
  TEST
 } from '../types';

const AlertState = props => {
  const initialState = {
    test: 'test'
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Get data
  const getData = () => {
    dispatch({
      type: TEST,
      payload: 'new test'
    });
  };

  return (
    <AlertContext.Provider
      value={{
        test: state.test,
        getData
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;