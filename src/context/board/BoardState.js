import React, { useReducer } from 'react';
import uuid from 'uuid';
import BoardContext from './boardContext';
import boardReducer from './boardReducer';
import {
  ADD_BOARD,
  SET_TITLE,
  SET_STAR,
  SET_DESCRIBTION,
  ADD_LIST,
  ADD_CARD,
  UPDATE_CARD
} from '../types';

const BoardState = props => {
  const initialState = {
    boards: [
      {
        title: 'my nice board',
        id: 1,
        color: '#e27b47',
        starred: false,
        describtion: 'board describtion goes here',
        lists: [
          {
            title: 'todos',
            id: uuid.v4(),
            items: [
              {
                text: 'todo 1',
                desc: 'one describtion',
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
          }
        ]
      },
      {
        title: 'test empty',
        id: 2,
        starred: false,
        color: '#4759a3',
        describtion: '',
        lists: [

        ]
      }
    ],
    listOfStarredBoardsIds: []
  };

  const [state, dispatch] = useReducer(boardReducer, initialState);

  // Get data
  const getBoardsNames = () => {
    const list = state.boards.map(b => b.title);
    
    return list
  };

  const addBoard = (title, color) => {
    const newBaord = {
      title,
      id: uuid.v4(),
      color,
      starred: false,
      describtion: '',
      lists: []
    }
    dispatch({
      type: ADD_BOARD,
      payload: newBaord
    });
  }

  // get  recent used boards based on user state
  const getRecentBoards = (ids) => {
    const list = [];

    ids && ids.forEach(id => list.push(getBoard(id)));

    return list
  }

  // get boards with starred = true
  const getStarredBoards = () => {
    const list = [];
    state.listOfStarredBoardsIds.forEach(id => list.push(getBoard(id)));

    return list;
  }

  // send a single board to board page (returns an array with one object)
  const getBoard = (id) => {
    const board = state.boards.filter(b => b.id === id);

    return board[0]
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
    let newListOfStarredBoardsIds = state.listOfStarredBoardsIds;
    if(state.listOfStarredBoardsIds.indexOf(id) !== -1) {
      newListOfStarredBoardsIds.splice(state.listOfStarredBoardsIds.indexOf(id), 1);
    } else {
      newListOfStarredBoardsIds.push(id);
    }
    dispatch({
      type: SET_STAR,
      payload: {
        id,
        newListOfStarredBoardsIds
      }
    });
  }

  // set board describtion
  const setDescribtion = (text, id) => {
    dispatch({
      type: SET_DESCRIBTION,
      payload: {
        id,
        text
      }
    });
  }

  // add List to board
  const addList = (text, id) => {
    const newList = {
      title: text,
      id: uuid.v4(),
      items: []
    }
    dispatch({
      type: ADD_LIST,
      payload: {
        id,
        newList
      }
    });
  }

  // add card to list
  const addCard = (text, listId, boardId) => {
    const newCard = {
      text,
      id: uuid.v4(),
      labels: []
    }
    dispatch({
      type: ADD_CARD,
      payload: {
        newCard,
        listId,
        boardId
      }
    });
  }

  // update card
  const updateCard = (boardId, listId, cardId, newCard) => {
    dispatch({
      type: UPDATE_CARD,
      payload: {

      }
    })
  }

  return (
    <BoardContext.Provider
      value={{
        boards: state.boards,
        addBoard,
        getBoardsNames,
        getRecentBoards,
        getStarredBoards,
        getBoard,
        setTitle,
        setStar,
        setDescribtion,
        addList,
        addCard,
        updateCard
      }}
    >
      {props.children}
    </BoardContext.Provider>
  );
};

export default BoardState;