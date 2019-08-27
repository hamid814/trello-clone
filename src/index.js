import React, { Fragment, useState , useEffect } from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/layout/Navbar';
import FormContainer from './components/layout/FormContainer';
import Todos from './components/todos/Todos';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todosEmpty, setTodosEmpty] = useState(true);

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
      id: `todo-number-${todos.length + 1}`,
      text,
      done: true
    };
    setTodosEmpty(false);
    let list = [];
    todos.forEach(t => list.push(t));
    list.push(newTodo);
    setTodos(list);

    // add to local
    setToLocal(newTodo);
  }

  const markComplete = (id) => {
    console.log(id);
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
          todosEmpty={todosEmpty} />
        <Todos
          todos={todos}
          todosEmpty={todosEmpty}
          markComplete={markComplete}
          onClear={onClear} />
      </div>
      
    </Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));