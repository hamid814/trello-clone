import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import TodoContext from '../../context/todo/todoContext';

const TodoBtnPanel = (props) => {
  const todoContext = useContext(TodoContext);

  const { clearTodos } = todoContext;

  const { 
          onCheckAll,
          allDone,
          todosEmpty,
          showActive,
          onFilter
  } = props;

  return (
    <div className='grid-3 container-sm mt-0'>
      <div className={`btn btn-block rounded ${todosEmpty ? 'btn-light' : 'btn-success'}`} onClick={onCheckAll}>
        <div className={`box ${!allDone && 'bg-dark'}`}></div>
        {allDone ? 'Uncheck all' : 'Check all'}
      </div>
      <div className={`btn btn-block rounded ${todosEmpty ? 'btn-light' : 'btn-warning'}`} onClick={onFilter}>
        Show {showActive ? 'all' : 'active'}
      </div>
      <div className={`btn btn-block rounded ${todosEmpty ? 'btn-light' : 'btn-danger'}`} onClick={clearTodos}>
        Clear todos 
      </div>
    </div>
    
  )
}

TodoBtnPanel.propTypes = {
  onCheckAll: PropTypes.func.isRequired,
  allDone: PropTypes.bool.isRequired,
  todosEmpty: PropTypes.bool.isRequired,
  showActive: PropTypes.bool.isRequired,
  onFilter: PropTypes.func.isRequired,
}

export default TodoBtnPanel
