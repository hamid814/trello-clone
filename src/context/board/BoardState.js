import React, { useReducer } from 'react';
import uniqid from 'uniqid';
import BoardContext from './boardContext';
import boardReducer from './boardReducer';
import {
  DELETE_ALL_BOARDS,
  SET_BOARDS,
  ADD_BOARD,
  DELETE_BOARD,
  CLEAR_BOARD,
  SET_TITLE,
  SET_STAR,
  SET_BOARD_WATCHING,
  SET_WATCHING,
  SET_DESCRIBTION,
  SET_COLOR,
  ADD_LIST,
  DELETE_LIST,
  DELETE_ALL_CARDS,
  MOVE_ALL_CARDS,
  SET_LIST_TITLE,
  COPY_LIST,
  SORT_LIST,
  MOVE_LIST,
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  MOVE_CARD,
  SET_LABELS,
  ADD_LABEL,
  UPDATE_LABEL,
  DELETE_LABEL,
} from '../types';

const BoardState = props => {
  const initialState = {
    boards: [],
    labels: [
      {
        id: 1,
        color: '#61bd4f',
        colorName: 'green',
        name: ''
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
    // this color is for boards
    boardColors: [
      '#0079bf',
      '#d29034',
      '#519839',
      '#b04632',
      '#89609e',
      '#cd5a91',
      '#4bbf6b',
      '#00aecc',
      '#838c91'
    ],
    // this color is fr labels
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
    ]
  };

  const [state, dispatch] = useReducer(boardReducer, initialState);

  // Get data from local storage
  const getBoardsData = () => {
    const boards = JSON.parse(localStorage.getItem('boards'));
    const labels = JSON.parse(localStorage.getItem('labels'));

    if(boards) {
      dispatch({
        type: SET_BOARDS,
        payload: boards
      });
    }
    if(labels) {
      dispatch({
        type: SET_LABELS,
        payload: labels
      });
    }
  };

  const setDemoBoards = () => {

  }

  const deleteAllBoards = () => {
    dispatch({
      type: DELETE_ALL_BOARDS
    });
  }

  const addBoard = (title, color, id) => {
    const newBaord = {
      title,
      id,
      color,
      starred: false,
      watching: false,
      describtion: '',
      lists: []
    }
    dispatch({
      type: ADD_BOARD,
      payload: newBaord
    });
  }

  const deleteBoard = (id) => {
    dispatch({
      type: DELETE_BOARD,
      payload: id
    });
  }

  // send a single board to board page (returns an array with one object)
  const getBoard = (id) => {
    const board = state.boards.filter(b => b.id === id);

    return board[0]
  }

  const clearBoard = (id) => {
    dispatch({
      type: CLEAR_BOARD,
      payload: id
    });
  }

  const setBoardWatching = (id) => {
    dispatch({
      type: SET_BOARD_WATCHING,
      payload: id
    });
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
    dispatch({
      type: SET_STAR,
      payload: id
    });
  }

  // set watching for a list
  const setWatching = (boardId, listId) => {
    dispatch({
      type: SET_WATCHING,
      payload: {
        boardId,
        listId
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

  // set board color
  const setColor = (color, id) => {
    dispatch({
      type: SET_COLOR,
      payload: {
        id,
        color
      }
    });
  }

  // add List to board
  const addList = (text, boardId) => {
    const newList = {
      title: text,
      id: uniqid(),
      boardId,
      watching: false,
      items: []
    }
    dispatch({
      type: ADD_LIST,
      payload: {
        id: boardId,
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

  const deleteAllCards = (boardId, listId) => {
    dispatch({
      type: DELETE_ALL_CARDS,
      payload: {
        boardId,
        listId
      }
    });
  }

  const moveAllCards = (boardId, firstListId, destListId) => {
    let newItems = [];

    getList(boardId, firstListId).items.forEach(item => {
      newItems.push(item);
    });

    // make newItems equal to an array of items with new ids
    newItems = newItems.map(i => {
      return {
        ...i,
        id: uniqid(),
        listId: destListId
      }
    })

    dispatch({
      type: MOVE_ALL_CARDS,
      payload: {
        boardId,
        firstListId,
        destListId,
        newItems
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

  const copyList = (boardId, listId, title) => {
    let theList;

    state.boards.forEach(b => b.id === boardId && b.lists.forEach(l => {
      if(l.id === listId) {
        theList = l
      }
    }))
    
    const newList = {
      ...theList,
      title,
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

  const sortList = (boardId, listId) => {
    const newItems = getList(boardId, listId).items;

    newItems.sort((a, b) => a.text < b.text ? -1 : a.text > b.text ? 1 : 0);

    dispatch({
      type: SORT_LIST,
      payload: {
        boardId,
        listId,
        newItems
      }
    });
  }

  // takes in four prams: (first board id, first list id, destination board id, destionation index)
  const moveList = (firstBoardId, firstListId, destBoardId, destIndex) => {
    const firstIndex = getBoard(firstBoardId).lists.findIndex(l => l.id === firstListId);

    const list = getList(firstBoardId, firstListId);

    const newList = {
      ...list,
      boardId: destBoardId,
    }

    dispatch({
      type: MOVE_LIST,
      payload: {
        firstBoardId,
        firstIndex,
        destBoardId,
        destIndex,
        list: newList
      }
    });
  }

  // add card to list
  const addCard = (text, listId, boardId) => {
    const newCard = {
      text,
      id: uniqid(),
      listId,
      boardId,
      desc: '',
      watching: false,
      labels: [],
      checklists: [],
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

  const moveCard = (firstBoardId,firstListId,cardId,destBoardId,destListId,destIndex,card, isCopy) => {
    // isCopy Argument is here because i use same functions for copy and move a card
    // in case of copy we shouldent delete first card

    !isCopy && deleteCard(firstBoardId, firstListId, cardId);

    const cardWithNewId = {
      ...card,
      id: uniqid(),
      boardId: destBoardId,
      listId: destListId,
    }

    dispatch({
      type: MOVE_CARD,
      payload: {
        destBoardId,
        destListId,
        destIndex,
        card: cardWithNewId
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
        boardColors: state.boardColors,
        getBoardsData,
        setDemoBoards,
        deleteAllBoards,
        addBoard,
        deleteBoard,
        getBoard,
        clearBoard,
        getList,
        setTitle,
        setStar,
        setBoardWatching,
        setWatching,
        setDescribtion,
        setColor,
        addList,
        deleteList,
        deleteAllCards,
        moveAllCards,
        setListTitle,
        copyList,
        sortList,
        moveList,
        addCard,
        updateCard,
        deleteCard,
        moveCard,
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