import React , { Fragment } from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';
import NoTodo from './NoTodo';
import ClearList from './ClearList';

const Todos = ({ todos, todosEmpty, onClear, markComplete, onDelete, onEdit }) => {
  return (
    <div className="form-container">
      {!todosEmpty ? todos.map((t, index) => (
        <Fragment key={t.id}>
          <TodoItem todo={t} markComplete={markComplete} onDelete={onDelete} onEdit={onEdit} />
          {todos.length === index + 1 && <ClearList onClear={onClear} />}
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
