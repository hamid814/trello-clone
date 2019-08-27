import React from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';
import NoTodo from './NoTodo';

const Todos = (props) => {
  const { todos,
          todosEmpty,
          onCheck,
          onDelete,
          onEdit,
          showActive
        } = props
  return (
    <div className='form-container'>
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
