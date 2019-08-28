import React from 'react';
import Navbar from './components/layout/Navbar';
import FormContainer from './components/layout/FormContainer';
import Congrats from './components/layout/Congrats';
import Todos from './components/todos/Todos';
import TodoBtnPanel from './components/todos/TodoBtnPanel';

import TodoState from './context/todo/TodoState';
import './App.css';

const App = () => {
    // let listOfDoneTrue = [];
    // let listOfDoneFalse = [];
    // todos.forEach(t => t.done ? listOfDoneTrue.push(t.done) : listOfDoneFalse.push(t.done));
    // if(listOfDoneTrue.length === todos.length && todos.length !== 0) {
    //   setAllDone(true);
    // } else {
    //   setAllDone(false);
    // }
    // eslint-disable-next-line

  return (
    <TodoState>
      <Navbar />
      <FormContainer />
      <Congrats />
      <Todos />
      <TodoBtnPanel />
    </TodoState>
  );
}

export default App