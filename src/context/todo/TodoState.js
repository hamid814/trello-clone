import React, { useReducer } from 'react';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import {
  GET_TODOS
} from '../types';

const TodoState = props => {
  const initialState = {
    todos: []
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Get todos
  const getContacts = async () => {
    let list;
    if(localStorage.getItem('todos') === null) {
      list = [];
    } else {
      list = JSON.parse(localStorage.getItem('todos'));
    }

    return list;
     
    // try {
    //   const res = await axios.get('/api/contacts');

    //   dispatch({
    //     type: GET_CONTACTS,
    //     payload: res.data
    //   });
    // } catch (err) {
    //   dispatch({
    //     type: CONTACT_ERROR,
    //     payload: err.response.msg
    //   });
    // }
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        getContacts,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;