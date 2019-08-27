import React, { useReducer } from 'react';
import uuid from 'uuid';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import {
  GET_TODOS,
  ADD_TODO,
  CLEAR_TODOS,
  CHECK_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  SET_CURRENT,
  CLEAR_CURRENT
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

  // mark todo as complete
  const checkTodo = (id) => {
    dispatch({
      type: CHECK_TODO,
      payload: id
    });
  }

  //  delete todo
  const deleteTodo = (id) => {
    dispatch({
      type: DELETE_TODO,
      payload: id
    });
  }

  // set current for edit
  const setCurrent = (todo) => {
    dispatch({
      type: SET_CURRENT,
      payload: todo
    });
  }

  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT
    });
  }

  // update todo
  const updateTodo = (text, id) => {
    dispatch({
      type: UPDATE_TODO,
      payload: {
        text,
        id
      }
    });
    clearCurrent();
  }

  // clear all from todo list
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
        deleteTodo,
        clearTodos,
        setCurrent,
        checkTodo,
        filtered: state.filtered
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;