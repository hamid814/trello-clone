import React , { Fragment } from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';
import NoTodo from './NoTodo';
import TodoBtnPanel from './TodoBtnPanel';

const Todos = (props) => {
  const { todos,
          todosEmpty,
          onClear,
          check,
          onDelete,
          onEdit,
          onCheckAll,
          allChecked
        } = props
  return (
    <div className="form-container">
      {!todosEmpty ? todos.map((t, index) => (
        <Fragment key={t.id}>
          <TodoItem todo={t} check={check} onDelete={onDelete} onEdit={onEdit} />
          {
            todos.length === index + 1
              && <TodoBtnPanel
                  onClear={onClear}
                  onCheckAll={onCheckAll}
                  allChecked={allChecked}
                  />
          }
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
