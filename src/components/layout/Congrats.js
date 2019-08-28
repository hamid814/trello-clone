import React, { useState, useContext } from 'react';
import TodoContext from '../../context/todo/todoContext';

const Congrats = () => {
  const { todos } = useContext(TodoContext);

  const [allDone, setAllDone] = useState(false);

  let listOfDone = [];
  todos.forEach(t => t.done && listOfDone.push(t.done));
  if(listOfDone.length === todos.length && todos.length !== 0) {
    setAllDone(true);
  } else {
    setAllDone(false);
  }

  return (
    <div className={`container-sm my-0 ${!allDone && 'd-n'}`}>
      <div className='alert alert-success text-center text-bold'>
        Nice Job!
        Yoy have done all your works  
      </div>  
    </div>
  )
}

export default Congrats
