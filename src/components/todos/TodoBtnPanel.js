import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import TodoContext from '../../context/todo/todoContext';

const TodoBtnPanel = (props) => {
  const todoContext = useContext(TodoContext);

  const { clearTodos, checkAll, filterTodos, clearFilter, filtered, todos } = todoContext;

  const { allDone } = props;

  const toggleFilter = () => {
    filtered ? clearFilter() : filterTodos()
  }

  return (
    <div className='grid-3 container-sm mt-0'>
      <div className={`btn btn-block rounded ${todos.length === 0 ? 'btn-light' : 'btn-success'}`} onClick={checkAll}>
        <div className={`box ${!allDone && 'bg-dark'}`}></div>
        {allDone ? 'Uncheck all' : 'Check all'}
      </div>
      <div className={`btn btn-block rounded ${todos.length === 0 ? 'btn-light' : 'btn-warning'}`} onClick={toggleFilter}>
        Show {filtered ? 'all' : 'active'}
      </div>
      <div className={`btn btn-block rounded ${todos.length === 0 ? 'btn-light' : 'btn-danger'}`} onClick={clearTodos}>
        Clear todos 
      </div>
    </div>
    
  )
}

TodoBtnPanel.propTypes = {
  allDone: PropTypes.bool.isRequired,
}

export default TodoBtnPanel
