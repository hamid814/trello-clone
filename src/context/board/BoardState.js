import React, { useReducer } from 'react';
import uniqid from 'uniqid';
import BoardContext from './boardContext';
import boardReducer from './boardReducer';
import {
  ADD_BOARD,
  SET_TITLE,
  SET_STAR,
  SET_DESCRIBTION,
  ADD_LIST,
  DELETE_LIST,
  SET_LIST_TITLE,
  COPY_LIST,
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  ADD_LABEL,
  UPDATE_LABEL,
  DELETE_LABEL
} from '../types';

const BoardState = props => {
  const initialState = {
    boards: [
      {
        title: 'my nice board',
        id: 1,
        color: '#46b29e',
        starred: false,
        describtion: 'board describtion goes here',
        lists: [
          {
            title: 'todos',
            id: 1,
            items: [
              {
                text: 'todo 1',
                desc: 'one describtion',
                id: uniqid(),
                labels: [
                  1,
                  3,
                  6
                ]
              },
              {
                text: 'todo 2',
                id: uniqid(),
                labels: [
                  3
                ]
              },
              {
                text: 'todo 2',
                id: uniqid(),
                labels: [
                  2
                ]
              },
              {
                text: 'todo 2',
                id: uniqid(),
                labels: [
                  2
                ]
              },
              {
                text: 'todo 2',
                id: uniqid(),
                labels: [
                  2
                ]
              },
              {
                text: 'todo 2',
                id: uniqid(),
                labels: [
                  2
                ]
              },
            ]
          },
          {
            title: 'doing',
            id: uniqid(),
            items: [
              {
                text: 'doing 1',
                id: uniqid(),
                labels: [
                  5,
                  3
                ]
              },
              {
                text: 'doing 2',
                id: uniqid(),
                labels: [
                  4,
                  5,
                  6,
                  1,
                  3,
                  2 
                ]
              },
              {
                text: 'doing 3',
                id: uniqid(),
                labels: [
                  6,
                  4
                ]
              }
            ]
          },
          {
            title: 'new list',
            id: uniqid(),
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
          {
            title: 'test for one',
            id: uniqid(),
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
      {
        name: 'green',
        color: '#61bd4f'
      },
      {
        name: 'yellow',
        color: '#f2d600'
      },
      {
        name: 'orange',
        color: '#ff9f1a'
      },
      {
        name: 'red',
        color: '#eb5a46'
      },
      {
        name: 'purple',
        color: '#c377e0'
      },
      {
        name: 'blue',
        color: '#0079bf'
      },
      {
        name: 'sky',
        color: '#00c2e0'
      },
      {
        name: 'lime',
        color: '#51e898'
      },
      {
        name: 'pink',
        color: '#ff78cb'
      },
      {
        name: 'black',
        color: '#344563'
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
      id: uniqid(),
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

  const getList = (boardId, ListId) => {
    const board = state.boards.filter(b => b.id === boardId)[0];

    const list = board.lists.filter(l => l.id === ListId)[0];

    return list
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
      id: uniqid(),
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

  const deleteList = (boardId, listId) => {
    dispatch({
      type: DELETE_LIST,
      payload: {
        boardId,
        listId
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

  const copyList = (boardId, listId, name) => {
    let theList;

    state.boards.forEach(b => b.id === boardId && b.lists.forEach(l => {
      if(l.id === listId) {
        theList = l
      }
    }))
    
    const newList = {
      ...theList,
      title: name,
      id: uniqid()
    }

    dispatch({
      type: COPY_LIST,
      payload: {
        boardId,
        listId,
        newList
      }
    });
  }

  // add card to list
  const addCard = (text, listId, boardId) => {
    const newCard = {
      text,
      id: uniqid(),
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

  const addLabel = (name, colorName, id) => {
    let is = false;
    const newLabel = {
      id,
      colorName,
      name,
      color: state.colors.filter(c => c.name === colorName)[0].color
    };

    state.labels.forEach(label => {
      if(label.colorName === colorName) {
        if(label.name === name) {
          is = true
        }
      }
    });

    if(!is) {
      dispatch({
        type : ADD_LABEL,
        payload: newLabel
      });
    }
  }

  const updateLabel = (name, colorName, id) => {
    dispatch({
      type: UPDATE_LABEL,
      payload: {
        name,
        colorName,
        color: state.colors.filter(c => c.name === colorName)[0].color,
        id
      }
    });
  }

  const deleteLabel = (id) => {
    dispatch({
      type: DELETE_LABEL,
      payload: id
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
        getList,
        setTitle,
        setStar,
        setDescribtion,
        addList,
        deleteList,
        setListTitle,
        copyList,
        addCard,
        updateCard,
        deleteCard,
        addLabel,
        updateLabel,
        deleteLabel,
      }}
    >
      {props.children}
    </BoardContext.Provider>
  );
};

export default BoardState;