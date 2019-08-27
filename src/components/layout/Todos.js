import React , { Fragment } from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';
import NoTodo from './NoTodo';
import ClearList from './ClearList';

const Todos = ({ todos, todosEmpty }) => {
  return (
    <div className="form-container">
      {!todosEmpty ? todos.map(t => (
        <Fragment>
        <TodoItem key={t} todo={t} />
        
        </Fragment>
      )) : <NoTodo />}
    </div>
  )
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  todosEmpty: PropTypes.bool.isRequired
}

export default Todos
