import React, { Fragment, useState , useEffect } from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import Navbar from './components/layout/Navbar';
import FormContainer from './components/layout/FormContainer';
import Todos from './components/todos/Todos';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todosEmpty, setTodosEmpty] = useState(true);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    setTodos(getTodos());
    console.log(getTodos());
    console.log(todos);
    // eslint-disable-nex-line
  }, [])

  const getTodos = () => {
    let list;
    if(localStorage.getItem('todos') === null) {
      list = [];
    } else {
      list = JSON.parse(localStorage.getItem('todos'));
    }

    return list;
  }
  
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

  const onEdit = (todo) => {
    setCurrent(todo);
  }

  const markComplete = (id) => {
    const newList = todos.map(t => {
      if(t.id === id) {
        t.done = !t.done
      }
      return t
    });
    setTodos(newList);
    localStorage.setItem('todos', JSON.stringify(newList));
  }

  const onDelete = (id) => {
    const newList = todos.filter(t => t.id !== id);
    setTodos(newList);
    localStorage.setItem('todos', JSON.stringify(newList));
    console.log('set todosEmpty to true if length is 0');
  }

  const onClear = () => {
    setTodos([]);
    localStorage.setItem('todos', JSON.stringify([]));
    setTodosEmpty(true);
  }

  return (
    <Fragment>
      <Navbar />
      <div className="container mt-2">
        <FormContainer
          addTodo={addTodo}
          todosEmpty={todosEmpty}
          current={current} />
        <Todos
          todos={todos}
          todosEmpty={todosEmpty}
          markComplete={markComplete}
          onDelete={onDelete}
          onClear={onClear}
          onEdit={onEdit} />
      </div>
      
    </Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));