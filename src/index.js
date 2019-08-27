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
    setToLocal();
    getTodos();
    console.log(todos);
    console.log(getTodos());
    // eslint-disable-nex-line
  }, [])

  const getTodos = () => {
    let list;
    if(localStorage.getItem('todos') === null) {
      list = [];
    } else {
      list = JSON.parse(localStorage.getItem('todos'));
    }
    setTodos(list);

    return list;
  }
  
  const setToLocal = () => {
    console.log('set to local');
  }

  const addTodo = (name) => {
    setTodosEmpty(false);
    let list = [];
    todos.forEach(t => list.push(t));
    list.push(name);
    setTodos(list);

    // add to local
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
          todosEmpty={todosEmpty} />
      </div>
      
    </Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));