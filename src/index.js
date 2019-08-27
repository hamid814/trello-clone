import React, { Fragment, useState , useEffect } from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/layout/Navbar';
import FormContainer from './components/layout/FormContainer';
import Todos from './components/layout/Todos';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos();
    if(localStorage.getItem('todos') === null) {
      console.log('is null');
    }
    // eslint-desable-next-line
  }, [todos])

  const getTodos = () => {
    // let list = [];
    // if(localStorage.getItem()) {
      
    // } else {

    // }
  }
  
  const [todosEmpty, setTodosEmpty] = useState(true);

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