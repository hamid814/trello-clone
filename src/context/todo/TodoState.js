import React, { useReducer } from 'react';
import uuid from 'uuid';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import {
  GET_TODOS,
  ADD_TODO,
  CLEAR_TODOS,
  UPDATE_TODO
} from '../types';

const TodoState = props => {
  const initialState = {
    todos: [],
    filtered: [],
    current: null
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

  // add todo
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

  // update todo
  const updateTodo = (text, id) => {
    dispatch({
      type: UPDATE_TODO,
      action: {
        text,
        id
      }
    });
  }

  const clearTodos = () => {
    dispatch({
      type: CLEAR_TODOS
    });
  }

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        current: state.current,
        getTodos,
        addTodo,
        updateTodo,
        clearTodos,
        
        filtered: state.filtered
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;