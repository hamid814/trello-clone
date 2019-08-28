import React, { useState , useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import FormContainer from './components/layout/FormContainer';
import Congrats from './components/layout/Congrats';
import Todos from './components/todos/Todos';
import TodoBtnPanel from './components/todos/TodoBtnPanel';

import TodoState from './context/todo/TodoState';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState();
  const [todosEmpty, setTodosEmpty] = useState(true);
  const [allDone, setAllDone] = useState(false);

  useEffect(() => {
    // if(todos.length === 0) {
      setTodosEmpty(false);
    // } else {
    //   setTodosEmpty(false);
    // }
    // let listOfDoneTrue = [];
    // let listOfDoneFalse = [];
    // todos.forEach(t => t.done ? listOfDoneTrue.push(t.done) : listOfDoneFalse.push(t.done));
    // if(listOfDoneTrue.length === todos.length && todos.length !== 0) {
    //   setAllDone(true);
    // } else {
    //   setAllDone(false);
    // }
    // eslint-disable-next-line
  }, [todos])

  return (
    <TodoState>
      <Navbar />
      <FormContainer />
      <Congrats
        allDone={allDone} />
      <Todos
        todosEmpty={todosEmpty} />
      <TodoBtnPanel
        todosEmpty={todosEmpty}
        allDone={allDone} />
    </TodoState>
  );
}

export default App