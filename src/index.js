import React, { Fragment, useState , useEffect } from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import Navbar from './components/layout/Navbar';
import FormContainer from './components/layout/FormContainer';
import Todos from './components/todos/Todos';
import TodoBtnPanel from './components/todos/TodoBtnPanel';

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
  const [showDone, setShowDone] = useState(false);

  useEffect(() => {
    if(todos.length === 0) {
      setTodosEmpty(true);
    } else {
      setTodosEmpty(false);
    }
    let listOfDoneTrue = [];
    let listOfDoneFalse = [];
    todos.forEach(t => t.done ? listOfDoneTrue.push(t.done) : listOfDoneFalse.push(t.done));
    if(listOfDoneTrue.length === todos.length) {
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
    setShowDone(!showDone);
  }

  return (
    <Fragment>
      <Navbar />
      <div className="container mt-2">
        <FormContainer
          addTodo={addTodo}
          onUpdate={onUpdate}
          current={current} />
        <Todos
          todos={todos}
          todosEmpty={todosEmpty}
          check={onCheck}
          onDelete={onDelete}
          onEdit={onEdit} />
        <TodoBtnPanel
          onClear={onClear}
          onCheckAll={onCheckAll}
          todosEmpty={todosEmpty}
          showDone={showDone}
          onFilter={onFilter}
          allDone={allDone} />
      </div>
      
    </Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));