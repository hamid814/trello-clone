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
          onCheck,
          onDelete,
          onEdit,
          showActive
        } = props
  return (
    <div className='container-sm'>
      {
        !todosEmpty
          ? !showActive
            ? todos.map((t, index) => (
              <TodoItem key={t.id} todo={t} onCheck={onCheck} onDelete={onDelete} onEdit={onEdit} />
              ))
            : todos.map(t => (
              !t.done && <TodoItem key={t.id} todo={t} onCheck={onCheck} onDelete={onDelete} onEdit={onEdit} />
            ))
          : <NoTodo />
      }
    </div>
  )
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  todosEmpty: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired, 
  onEdit: PropTypes.func.isRequired,
  showActive: PropTypes.bool.isRequired
}

export default Todos
