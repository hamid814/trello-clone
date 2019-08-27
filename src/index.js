import React, { Fragment, useState , useEffect } from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/layout/Navbar';
import FormContainer from './components/layout/FormContainer';
import Todos from './components/layout/Todos';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todosEmpty, setTodosEmpty] = useState(true);

  useEffect(() => {
    setTodos(getTodos());
    console.log(todos);
    console.log(getTodos());
    // eslint-disable-nex-line
  }, [setTodos])

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
          onClear={onClear} />
      </div>
      
    </Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));