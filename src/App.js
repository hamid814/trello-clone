import React, { Fragment, useState , useEffect, useContext } from 'react';
import uuid from 'uuid';
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
  const [current, setCurrent] = useState(null);
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

  
  
  const setToLocal = (name) => {
    const list = getTodos();

    list.push(name);

    localStorage.setItem('todos', JSON.stringify(list));
  }

  const addTodo = (text) => {
    const newTodo = {
      id: uuid.v4(),
      text,
      done: false
    };
    setTodosEmpty(false);
    let list = [];
    todos.forEach(t => list.push(t));
    list.push(newTodo);
    setTodos(list);

    // add to local
    setToLocal(newTodo);
  }

  const onEdit = (id) => {
    todos.forEach(t => t.id === id && setCurrent(t));
    document.querySelector('#input').focus();
  }

  const onUpdate = (text, id) => {
    const newList = todos.map(t => {
      if(t.id === id) {
        t.text = text
      }
      return t
    });
    setTodos(newList);
    localStorage.setItem('todos', JSON.stringify(newList));
    setCurrent(null);
  }

  const onCheck = (id) => {
    const newList = todos.map(t => {
      if(t.id === id) {
        t.done = !t.done
      }
      return t
    });
    setTodos(newList);
    localStorage.setItem('todos', JSON.stringify(newList));
  }

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

  const onDelete = (id) => {
    const newList = todos.filter(t => t.id !== id);
    setTodos(newList);
    localStorage.setItem('todos', JSON.stringify(newList));
  }

  const onClear = () => {
    setTodos([]);
    localStorage.setItem('todos', JSON.stringify([]));
    setTodosEmpty(true);
  }

  const onFilter = () => {
    setShowActive(!showActive);
  }

  return (
    <TodoState>
      <Navbar />
      <FormContainer
        addTodo={addTodo}
        onUpdate={onUpdate}
        current={current} />
      <Congrats
        allDone={allDone} />
      <Todos
        todos={todos}
        todosEmpty={todosEmpty}
        onCheck={onCheck}
        onDelete={onDelete}
        showActive={showActive}
        onEdit={onEdit} />
      <TodoBtnPanel
        onClear={onClear}
        onCheckAll={onCheckAll}
        todosEmpty={todosEmpty}
        showActive={showActive}
        onFilter={onFilter}
        allDone={allDone} />
    </TodoState>
  );
}

export default App