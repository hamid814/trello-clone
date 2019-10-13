import React, { useReducer } from 'react';
import uniqid from 'uniqid';
import BoardContext from './boardContext';
import boardReducer from './boardReducer';
import {
  SET_DEMO,
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
    const demo = [
   {
      title: 'blue board',
      id: 'k1oqj7gk',
      color: '#0079bf',
      starred: false,
      watching: false,
      describtion: '',
      lists: [
         {
            title: 'list 1',
            id: 'k1oqpu1q',
            boardId: 'k1oqj7gk',
            watching: false,
            items: [
               {
                  text: 'you can change the color of the board from board menu\n',
                  id: 'k1oqqdg0',
                  listId: 'k1oqpu1q',
                  boardId: 'k1oqj7gk',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'click on board menu and then you know where to go',
                  id: 'k1oqqrsn',
                  listId: 'k1oqpu1q',
                  boardId: 'k1oqj7gk',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               }
            ]
         },
         {
            title: 'list 2',
            id: 'k1oqupos',
            boardId: 'k1oqj7gk',
            watching: false,
            items: [
               {
                  text: 'change the color of this board',
                  id: 'k1oqv680',
                  listId: 'k1oqupos',
                  boardId: 'k1oqj7gk',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               }
            ]
         }
      ]
   },
   {
      title: 'yellow board',
      id: 'k1oqji79',
      color: '#d29034',
      starred: false,
      watching: false,
      describtion: '',
      lists: [
         {
            title: 'list 1',
            id: 'k1oqtz7a',
            boardId: 'k1oqji79',
            watching: false,
            items: [
               {
                  text: 'change the color of this board',
                  id: 'k1oqu6l8',
                  listId: 'k1oqtz7a',
                  boardId: 'k1oqji79',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               }
            ]
         },
         {
            title: 'list 2',
            id: 'k1oqvyo1',
            boardId: 'k1oqji79',
            watching: false,
            items: [
               {
                  text: 'there are other options you can test in the board menu',
                  id: 'k1oqwb5o',
                  listId: 'k1oqvyo1',
                  boardId: 'k1oqji79',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               }
            ]
         }
      ]
   },
   {
      title: 'favorite board',
      id: 'k1oqk0fh',
      color: '#b04632',
      starred: true,
      watching: false,
      describtion: '',
      lists: [
         {
            title: 'list 1',
            id: 'k1oqs8hy',
            boardId: 'k1oqk0fh',
            watching: false,
            items: [
               {
                  text: 'you can add a board to favorites with clicking on the star next to board title',
                  id: 'k1oqtfjz',
                  listId: 'k1oqs8hy',
                  boardId: 'k1oqk0fh',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               }
            ]
         }
      ]
   },
   {
      title: 'with describtion',
      id: 'k1oqkh7k',
      color: '#89609e',
      starred: false,
      watching: false,
      describtion: 'this board is set here for this weekend dinner with Hervé',
      lists: [
         {
            title: 'list 1',
            id: 'k1oqx5vh',
            boardId: 'k1oqkh7k',
            watching: false,
            items: []
         }
      ]
   },
   {
      title: 'work with cards',
      id: 'k1oqyekr',
      color: '#cd5a91',
      starred: false,
      watching: true,
      describtion: '',
      lists: [
         {
            title: 'card labels',
            id: 'k1oqyrw5',
            boardId: 'k1oqyekr',
            watching: false,
            items: [
               {
                  text: 'you can do quite a lot things with cards\n',
                  id: 'k1or05t0',
                  listId: 'k1oqyrw5',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'there are a bunch of cards in this board\n',
                  id: 'k1oqzko7',
                  listId: 'k1oqyrw5',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'add labels to them\n',
                  id: 'k1or0o16',
                  listId: 'k1oqyrw5',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'like this\n',
                  id: 'k1or0pti',
                  listId: 'k1oqyrw5',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [
                     1
                  ],
                  checklists: []
               },
               {
                  text: 'or this\n',
                  id: 'k1or0srq',
                  listId: 'k1oqyrw5',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [
                     5,
                     4,
                     3
                  ],
                  checklists: []
               },
               {
                  text: 'just click on the pen on top right of each card\n',
                  id: 'k1or1lrb',
                  listId: 'k1oqyrw5',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'you can even create your own new labels or edit existing ones\n',
                  id: 'k1or2qes',
                  listId: 'k1oqyrw5',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'click on a label to see what happens',
                  id: 'k1or32sk',
                  listId: 'k1oqyrw5',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               }
            ]
         },
         {
            title: 'move card',
            id: 'k1oqyxhl',
            boardId: 'k1oqyekr',
            watching: false,
            items: [
               {
                  text: 'you can also move a single \ncard',
                  id: 'k1or4e9u',
                  listId: 'k1oqyxhl',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'or all cards in one list\n',
                  id: 'k1or4l14',
                  listId: 'k1oqyxhl',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'you can drag them\n',
                  id: 'k1or4rxr',
                  listId: 'k1oqyxhl',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'or from list that open by pen, click on move card\n',
                  id: 'k1or5hmw',
                  listId: 'k1oqyxhl',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'by pen list, you can also move a card to another board\n',
                  id: 'k1or5xsu',
                  listId: 'k1oqyxhl',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'drag this card to the list right of this list\n',
                  id: 'k1or6xq0',
                  listId: 'k1oqyxhl',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'or left one\n',
                  id: 'k1or70vq',
                  listId: 'k1oqyxhl',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'you choose!!!\n',
                  id: 'k1or74g1',
                  listId: 'k1oqyxhl',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               }
            ]
         },
         {
            title: 'important cards',
            id: 'k1oqz12c',
            boardId: 'k1oqyekr',
            watching: true,
            items: [
               {
                  text: 'a card is important\n?',
                  id: 'k1or7u5k',
                  listId: 'k1oqz12c',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'you can watch it',
                  id: 'k1or7z7t',
                  listId: 'k1oqz12c',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: true,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'click on the card and just click the eye button',
                  id: 'k1or8nz2',
                  listId: 'k1oqz12c',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'you can watch a list too\n',
                  id: 'k1or8ttr',
                  listId: 'k1oqz12c',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'or a baord\n',
                  id: 'k1or8xdd',
                  listId: 'k1oqz12c',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               }
            ]
         },
         {
            title: 'a card has details',
            id: 'k1or9cp9',
            boardId: 'k1oqyekr',
            watching: false,
            items: [
               {
                  text: 'you want to add describtion to card?\n',
                  id: 'k1or9vro',
                  listId: 'k1or9cp9',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'click on the card and add the description',
                  id: 'k1orctal',
                  listId: 'k1or9cp9',
                  boardId: 'k1oqyekr',
                  desc: 'card detals go here',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'or you can add a task to the card\n',
                  id: 'k1orf55j',
                  listId: 'k1or9cp9',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'make a good application',
                  id: 'k1orf8h4',
                  listId: 'k1or9cp9',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: [
                     {
                        title: 'things to do',
                        id: 'k1orga00',
                        'hideDone': false,
                        items: [
                           {
                              text: 'learn html',
                              id: 'k1orggeh',
                              'done': true
                           },
                           {
                              text: 'learn css',
                              id: 'k1orgjyv',
                              'done': true
                           },
                           {
                              text: 'learn javascript',
                              id: 'k1orgqni',
                              'done': true
                           },
                           {
                              text: 'learn react',
                              id: 'k1orh18h',
                              'done': true
                           }
                        ]
                     }
                  ]
               }
            ]
         },
         {
            title: 'edit card',
            id: 'k1ora5jv',
            boardId: 'k1oqyekr',
            watching: false,
            items: [
               {
                  text: 'editing is possible through the pen  top right of the card',
                  id: 'k1oravbn',
                  listId: 'k1ora5jv',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'ths card has a writting mistake\n',
                  id: 'k1orbsv4',
                  listId: 'k1ora5jv',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'correct the card above\n',
                  id: 'k1orc2b5',
                  listId: 'k1ora5jv',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               }
            ]
         },
         {
            title: 'last work',
            id: 'k1orhzpg',
            boardId: 'k1oqyekr',
            watching: false,
            items: [
               {
                  text: 'work is done?\n',
                  id: 'k1ori5h6',
                  listId: 'k1orhzpg',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'delete card\n',
                  id: 'k1oriab1',
                  listId: 'k1orhzpg',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'Im sure you have noticed where to go to delete the card\n ',
                  id: 'k1oriujk',
                  listId: 'k1orhzpg',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               }
            ]
         },
         {
            title: 'list is done!',
            id: 'k1orjpx8',
            boardId: 'k1oqyekr',
            watching: false,
            items: [
               {
                  text: 'all cards in a list are done\n',
                  id: 'k1ork00r',
                  listId: 'k1orjpx8',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'what can you do?\n',
                  id: 'k1ork9nm',
                  listId: 'k1orjpx8',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'delete all cards in the list\nfrom list actions',
                  id: 'k1orkg93',
                  listId: 'k1orjpx8',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'Done!',
                  id: 'k1orkpn8',
                  listId: 'k1orjpx8',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'Done!\n',
                  id: 'k1orkwmd',
                  listId: 'k1orjpx8',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'Done!\n',
                  id: 'k1orkwus',
                  listId: 'k1orjpx8',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'Done!\n',
                  id: 'k1orkx2w',
                  listId: 'k1orjpx8',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'Done!\n',
                  id: 'k1orkx9l',
                  listId: 'k1orjpx8',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'Done!\n',
                  id: 'k1orkxfh',
                  listId: 'k1orjpx8',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'Done!\n',
                  id: 'k1orkxle',
                  listId: 'k1orjpx8',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'Done!\n',
                  id: 'k1orky19',
                  listId: 'k1orjpx8',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               }
            ]
         },
         {
            title: 'lost a card?',
            id: 'k1orozob',
            boardId: 'k1oqyekr',
            watching: false,
            items: [
               {
                  text: 'search for the card that lost it\n',
                  id: 'k1orp7x2',
                  listId: 'k1orozob',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               },
               {
                  text: 'you cant test the word address\n',
                  id: 'k1orpiea',
                  listId: 'k1orozob',
                  boardId: 'k1oqyekr',
                  desc: '',
                  watching: false,
                  labels: [],
                  checklists: []
               }
            ]
         }
      ]
   },
   {
      title: 'the lost board',
      id: 'k1ornqr8',
      color: '#0079bf',
      starred: false,
      watching: false,
      describtion: '',
      lists: [
         {
            title: 'list',
            id: 'k1ornt9a',
            boardId: 'k1ornqr8',
            watching: false,
            items: [
               {
                  text: 'address',
                  id: 'k1oro168',
                  listId: 'k1ornt9a',
                  boardId: 'k1ornqr8',
                  desc: 'address: city, street, number',
                  watching: false,
                  labels: [],
                  checklists: []
               }
            ]
         }
      ]
   }
  ]
    
    dispatch({
      type: SET_DEMO,
      payload: demo
    });
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