import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';
import NoTodo from './NoTodo';

import TodoContext from '../../context/todo/todoContext';

const Todos = (props) => {
  const todoContext = useContext(TodoContext);

  const { todos, getTodos, filtered } = todoContext;
  console.log(filtered);

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  const {
          todosEmpty,
        } = props
  return (
    <div className='container-sm'>
      {
        !todosEmpty
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

Todos.propTypes = {
  todosEmpty: PropTypes.bool.isRequired,
}

export default Todos
