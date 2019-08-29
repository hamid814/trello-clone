import React, { useReducer } from 'react';
import uuid from 'uuid';
import BoardContext from './boardContext';
import boardReducer from './boardReducer';
import { 
  
 } from '../types';

const BoardState = props => {
  const initialState = {
    boards: [
      {
        title: 'my nice board',
        id: 1,
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

  const getBoard = (id) => {
    const board = state.boards.filter(b => b.id === id);

    return board
  }

  return (
    <BoardContext.Provider
      value={{
        boards: state.boards,
        getBoardsNames,
        getBoard
      }}
    >
      {props.children}
    </BoardContext.Provider>
  );
};

export default BoardState;