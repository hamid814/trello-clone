import React, { useReducer } from 'react';
import BoardContext from './boardContext';
import boardReducer from './boardReducer';
import { 
  TEST
 } from '../types';

const BoardState = props => {
  const initialState = {
    test: 'test'
  };

  const [state, dispatch] = useReducer(boardReducer, initialState);

  // Get data
  const getData = () => {
    dispatch({
      type: TEST,
      payload: 'test'
    });
  };

  return (
    <BoardContext.Provider
      value={{
        test: state.test,
        getData
      }}
    >
      {props.children}
    </BoardContext.Provider>
  );
};

export default BoardState;