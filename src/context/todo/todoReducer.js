import {
  GET_TODOS,
  ADD_TODO,
  CLEAR_TODOS,
  UPDATE_TODO
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
    case UPDATE_TODO:
      return {
        ...state,
        todos: [state.todos.map(t => {if(t.id === action.payload.id) {
            t.text = action.payload.text
          }
          return t
        })]
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
