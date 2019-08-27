import {
  GET_TODOS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todoa: action.payload,
      };
    default:
      return state;
  }
};
