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
  SET_LIST_TITLE,
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD
} from '../types';

const BoardState = props => {
  const initialState = {
    boards: [
      {
        title: 'my nice board',
        id: 1,
        color: '#ee3a59',
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
                  1,
                  2
                ]
              },
              {
                text: 'todo 2',
                id: uuid.v4(),
                labels: [
                  3
                ]
              },
              {
                text: 'todo 2',
                id: uuid.v4(),
                labels: [
                  2
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
                  5,
                  3
                ]
              },
              {
                text: 'doing 2',
                id: uuid.v4(),
                labels: [
                  4,
                  5
                ]
              },
              {
                text: 'doing 3',
                id: uuid.v4(),
                labels: [
                  6,
                  4
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
          },
          {
            title: 'test for long',
            id: uuid.v4(),
            items: [
              
            ]
          },
        ]
      },
      {
        title: 'test empty',
        id: 2,
        starred: false,
        color: '#4759a3',
        describtion: '',
        lists: [
          {
            title: 'test for one',
            id: uuid.v4(),
            items: [
              
            ]
          }
        ]
      }
    ],
    labels: [
      {
        id: 1,
        color: '#61bd4f',
        colorName: 'green',
        name: 'label name'
      },
      {
        id: 2,
        color: '#f2d600',
        colorName: 'yellow',
        name: ''
      },
      {
        id: 3,
        color: '#ff9f1a',
        colorName: 'orange',
        name: ''
      },
      {
        id: 4,
        color: '#eb5a46',
        colorName: 'red',
        name: ''
      },
      {
        id: 5,
        color: '#c377e0',
        colorName: 'purple',
        name: ''
      },
      {
        id: 6,
        color: '#0079bf',
        colorName: 'blue',
        name: ''
      }
    ],
    colors: [
      
    ],
    listOfStarredBoardsIds: []
  };


  const [state, dispatch] = useReducer(boardReducer, initialState);
  console.log('use colors for just colors')
  console.log('add options like add label delete label edit label( name and color )')
  console.log(state.colors)

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

  const setListTitle = (boardId, listId, newTitle) => {
    dispatch({
      type: SET_LIST_TITLE,
      payload: {
        boardId,
        listId,
        newTitle
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
        boardId,
        listId,
        cardId,
        newCard
      }
    })
  }

  const deleteCard = (boardId, listId, cardId) => {
    dispatch({
      type: DELETE_CARD,
      payload: {
        boardId,
        listId,
        cardId
      }
    });
  }

  return (
    <BoardContext.Provider
      value={{
        boards: state.boards,
        labels: state.labels,
        colors: state.colors,
        addBoard,
        getBoardsNames,
        getRecentBoards,
        getStarredBoards,
        getBoard,
        setTitle,
        setStar,
        setDescribtion,
        addList,
        setListTitle,
        addCard,
        updateCard,
        deleteCard
      }}
    >
      {props.children}
    </BoardContext.Provider>
  );
};

export default BoardState;