import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';
import NoTodo from './NoTodo';

import TodoContext from '../../context/todo/todoContext';

const Todos = (props) => {
  const todoContext = useContext(TodoContext);

  const { todos, getTodos } = todoContext;
  console.log(todos);

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  const {
          todosEmpty,
          showActive
        } = props
  return (
    <div className='container-sm'>
      {
        !todosEmpty
          ? !showActive
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
  showActive: PropTypes.bool.isRequired
}

export default Todos
