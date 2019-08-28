import React, { useContext } from 'react';
import TodoContext from '../../context/todo/todoContext';

const Congrats = () => {
  const { allDone } = useContext(TodoContext);

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
