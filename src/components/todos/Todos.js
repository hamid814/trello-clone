import React, { useEffect, useContext } from 'react';
import TodoItem from './TodoItem';
import NoTodo from './NoTodo';

import TodoContext from '../../context/todo/todoContext';

const Todos = (props) => {
  const todoContext = useContext(TodoContext);

  const { todos, getTodos, filtered } = todoContext;

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container-sm'>
      {
        todos.length > 0
          ? !filtered
            ? todos.map((t, index) => (
              <TodoItem key={t.id} todo={t} />
              ))
            : todos.map(t => (
              !t.done && <TodoItem key={t.id} todo={t} />
            ))
          : <NoTodo />
      }
    </div>
  )
}

export default Todos
