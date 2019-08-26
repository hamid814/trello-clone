import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/layout/Navbar';
import FormContainer from './components/layout/FormContainer';
import Todos from './components/layout/Todos';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (name) => {
    let list = [];
    todos.forEach(t => list.push(t));
    list.push(name);
    setTodos(list);
    console.log(todos);
  }

  return (
    <Fragment>
      <Navbar />
      <div className="container mt-2">
        <FormContainer addTodo={addTodo} />
        <Todos todos={todos} />
      </div>
      
    </Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));