import React, { useReducer } from 'react';
import uuid from 'uuid';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import {
  GET_TODOS,
  ADD_TODO
} from '../types';

const TodoState = props => {
  const initialState = {
    todos: []
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Get todos
  const getTodos = () => {
    let list;
    if(localStorage.getItem('todos') === null) {
      list = [];
    } else {
      list = JSON.parse(localStorage.getItem('todos'));
    }

    dispatch({
      type: GET_TODOS,
      payload: list
    });
  };

  const addTodo = (text) => {
    const newTodo = {
      id: uuid.v4(),
      text,
      done: false
    }
    dispatch({
      type: ADD_TODO,
      payload: newTodo
    });
  }

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        getTodos,
        addTodo
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;