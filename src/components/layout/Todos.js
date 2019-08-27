import React from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';
import NoTodo from './NoTodo';

const Todos = ({ todos, todosEmpty }) => {
  return (
    <div className="form-container">
      {!todosEmpty ? todos.map(t => (
        <TodoItem key={t} todo={t} />
      )) : <NoTodo />}
    </div>
  )
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  todosEmpty: PropTypes.bool.isRequired
}

export default Todos
