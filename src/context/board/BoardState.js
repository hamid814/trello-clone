import React, { useReducer } from 'react';
import uuid from 'uuid';
import BoardContext from './boardContext';
import boardReducer from './boardReducer';
import {
  SET_TITLE,
  SET_STAR,
  SET_DESCRIPTION,
  ADD_CARD
} from '../types';

const BoardState = props => {
  const initialState = {
    boards: [
      {
        title: 'my nice board',
        id: 1,
        color: '#e27b47',
        starred: false,
        description: 'board description goes here',
        lists: [
          {
            title: 'todos',
            id: uuid.v4(),
            items: [
              {
                text: 'todo 1',
                id: uuid.v4(),
                labels: [
                  'label 1',
                  'label 2'
                ]
              },
              {
                text: 'todo 2',
                id: uuid.v4(),
                labels: [
                  'label 2'
                ]
              },
              {
                text: 'todo 2',
                id: uuid.v4(),
                labels: [
                  'label 2'
                ]
              },
              {
                text: 'todo 2',
                id: uuid.v4(),
                labels: [
                  'label 2'
                ]
              },
              {
                text: 'todo 2',
                id: uuid.v4(),
                labels: [
                  'label 2'
                ]
              },
              {
                text: 'todo 2',
                id: uuid.v4(),
                labels: [
                  'label 2'
                ]
              },
              {
                text: 'todo 2',
                id: uuid.v4(),
                labels: [
                  'label 2'
                ]
              },
              {
                text: 'todo 2',
                id: uuid.v4(),
                labels: [
                  'label 2'
                ]
              },
              {
                text: 'todo 2',
                id: uuid.v4(),
                labels: [
                  'label 2'
                ]
              },
              {
                text: 'todo 2',
                id: uuid.v4(),
                labels: [
                  'label 2'
                ]
              },
              {
                text: 'todo 2',
                id: uuid.v4(),
                labels: [
                  'label 2'
                ]
              },
              {
                text: 'todo 2',
                id: uuid.v4(),
                labels: [
                  'label 2'
                ]
              },
              {
                text: 'todo 2',
                id: uuid.v4(),
                labels: [
                  'label 2'
                ]
              },
              {
                text: 'todo 2',
                id: uuid.v4(),
                labels: [
                  'label 2'
                ]
              },
              {
                text: 'todo 2',
                id: uuid.v4(),
                labels: [
                  'label 2'
                ]
              },
            ]
          },
          {
            title: 'doing',
            id: uuid.v4(),
            items: [
              {
                text: 'doing 1',
                id: uuid.v4(),
                labels: [
                  'label 3',
                  'label 2'
                ]
              },
              {
                text: 'doing 2',
                id: uuid.v4(),
                labels: [
                  'label 3',
                  'label 4'
                ]
              },
              {
                text: 'doing 3',
                id: uuid.v4(),
                labels: [
                  'label 4',
                  'label 2'
                ]
              }
            ]
          },
          {
            title: 'new list',
            id: uuid.v4(),
            items: [

            ]
          },
          {
            title: 'test for long',
            id: uuid.v4(),
            items: [
              
            ]
          },
          {
            title: 'test for long',
            id: uuid.v4(),
            items: [
              
            ]
          },
          {
            title: 'test for long',
            id: uuid.v4(),
            items: [
              
            ]
          }
        ]
      },
      {
        title: 'test empty',
        id: 2,
        color: '#ccc',
        lists: [

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

  // send a single board to board page (returns an array with one object)
  const getBoard = (id) => {
    const board = state.boards.filter(b => b.id === id);

    return board
  }

  // set board title
  const setTitle = (text, id) => {
    dispatch({
      type: SET_TITLE,
      payload: {
        id,
        text
      }
    });
  }

  // set board starred or unstarred
  const setStar = (id) => {
    dispatch({
      type: SET_STAR,
      payload: id
    });
  }

  // set board description
  const setDescription = (text, id) => {
    dispatch({
      type: SET_DESCRIPTION,
      payload: {
        id,
        text
      }
    });
  }

  const addCard = (text, listId, boardId) => {
    dispatch({
      type: ADD_CARD,
      payload: {
        text,
        listId,
        boardId
      }
    });
  }

  return (
    <BoardContext.Provider
      value={{
        boards: state.boards,
        getBoardsNames,
        getBoard,
        setTitle,
        setStar,
        setDescription,
        addCard
      }}
    >
      {props.children}
    </BoardContext.Provider>
  );
};

export default BoardState;