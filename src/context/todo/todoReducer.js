import {
  GET_TODOS,
  ADD_TODO,
  CHECK_TODO,
  CHECK_ALL,
  CLEAR_TODOS,
  UPDATE_TODO,
  DELETE_TODO,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_TODOS,
  CLEAR_FILTER,
  SET_ALLDONE
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }
    case CHECK_TODO:
      return {
        ...state,
        todos: state.todos.map(t => {
          if(t.id === action.payload) {
            t.done = !t.done
          }
           return t
        })
      }
    case CHECK_ALL:
      return {
        ...state,
        todos: action.payload
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(t => {if(t.id === action.payload.id) {
            t.text = action.payload.text
          }
          return t
        })
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload)
      }
    case FILTER_TODOS:
      return {
        ...state,
        filtered: state.todos.filter(t => !t.done)
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      }
    case CLEAR_TODOS:
      return {
        ...state,
        todos: []
      }
    case SET_ALLDONE:
      return {
        ...state,
        allDone: action.payload
      }
    default:
      return state;
  }
};
