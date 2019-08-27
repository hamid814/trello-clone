import React, { useState , useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import FormContainer from './components/layout/FormContainer';
import Congrats from './components/layout/Congrats';
import Todos from './components/todos/Todos';
import TodoBtnPanel from './components/todos/TodoBtnPanel';

import TodoState from './context/todo/TodoState';
import './App.css';

const App = () => {
  const getTodos = () => {
    let list;
    if(localStorage.getItem('todos') === null) {
      list = [];
    } else {
      list = JSON.parse(localStorage.getItem('todos'));
    }

    return list;
  }
  
  const [todos, setTodos] = useState(getTodos());
  const [todosEmpty, setTodosEmpty] = useState(true);
  const [allDone, setAllDone] = useState(false);
  const [showActive, setShowActive] = useState(false);

  useEffect(() => {
    if(todos.length === 0) {
      setTodosEmpty(true);
    } else {
      setTodosEmpty(false);
    }
    let listOfDoneTrue = [];
    let listOfDoneFalse = [];
    todos.forEach(t => t.done ? listOfDoneTrue.push(t.done) : listOfDoneFalse.push(t.done));
    if(listOfDoneTrue.length === todos.length && todos.length !== 0) {
      setAllDone(true);
    } else {
      setAllDone(false);
    }
    // eslint-disable-next-line
  }, [todos])

  const onCheckAll = () => {
    if(!allDone) {
      const newList = todos.map(t => {t.done = true; return t});
      setTodos(newList);
      localStorage.setItem('todos', JSON.stringify(newList));
      setAllDone(true);  
    } else {
      const newList = todos.map(t => {t.done = false; return t});
      setTodos(newList);
      localStorage.setItem('todos', JSON.stringify(newList));
      setAllDone(false);
    }
  }

  const onFilter = () => {
    setShowActive(!showActive);
  }

  return (
    <TodoState>
      <Navbar />
      <FormContainer />
      <Congrats
        allDone={allDone} />
      <Todos
        todosEmpty={todosEmpty}
        showActive={showActive} />
      <TodoBtnPanel
        onCheckAll={onCheckAll}
        todosEmpty={todosEmpty}
        showActive={showActive}
        onFilter={onFilter}
        allDone={allDone} />
    </TodoState>
  );
}

export default App