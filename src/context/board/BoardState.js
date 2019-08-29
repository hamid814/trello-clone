import React, { useReducer } from 'react';
import uuid from 'uuid';
import BoardContext from './boardContext';
import boardReducer from './boardReducer';
import { 
  TEST
 } from '../types';

const BoardState = props => {
  const initialState = {
    boards: [
      {
        title: 'borad 1',
        id: uuid.v4(),
        color: '#e27b47',
        starred: false,

        lists: [
          {
            title: 'todos',
            id: uuid.v4(),
            items: [
              {
                title: 'todo 1',
                id: uuid.v4(),
                labels: [
                  'label 1',
                  'label 2'
                ]
              }
            ]
          }
        ]
      }
    ],
    
  };

  const [state, dispatch] = useReducer(boardReducer, initialState);

  // Get data
  const getBoardsNames = () => {
    const list = state.boards.map(b => b.title);
    
    return list
  };

  return (
    <BoardContext.Provider
      value={{
        boards: state.boards,
        getBoardsNames
      }}
    >
      {props.children}
    </BoardContext.Provider>
  );
};

export default BoardState;