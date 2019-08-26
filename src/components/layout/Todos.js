import React from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';
import NoTodo from './NoTodo';

const Todos = ({ todos }) => {
  return (
    <div className="form-container">
      {todos !== [] ? todos.map(t => (
        <TodoItem key={t} todo={t} />
      )) : <NoTodo />}
      {console.log(todos)}
    </div>
  )
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos
