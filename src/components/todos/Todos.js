import React from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';
import NoTodo from './NoTodo';

const Todos = (props) => {
  const { todos,
          todosEmpty,
          check,
          onDelete,
          onEdit
        } = props
  return (
    <div className="form-container">
      {!todosEmpty ? todos.map((t, index) => (
          <TodoItem key={t.id} todo={t} check={check} onDelete={onDelete} onEdit={onEdit} />
      )) : <NoTodo />}
    </div>
  )
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  todosEmpty: PropTypes.bool.isRequired
}

export default Todos
