import {
  GET_TODOS,
  ADD_TODO,
  CHECK_TODO,
  CLEAR_TODOS,
  UPDATE_TODO,
  DELETE_TODO,
  SET_CURRENT,
  CLEAR_CURRENT
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
        todos: [...state.todos, action.payload]
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
    case CLEAR_TODOS:
      return {
        ...state,
        todos: []
      }
    default:
      return state;
  }
};
