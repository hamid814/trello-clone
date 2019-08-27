import React from 'react';
import PropTypes from 'prop-types'

const TodoBtnPanel = (props) => {
  const { onClear,
          onCheckAll,
          allDone,
          todosEmpty,
          showDone,
          onFilter
  } = props;

  return (
    <div className='grid-3 form-container mt-0'>
      <div className={`btn btn-block rounded ${todosEmpty ? 'btn-light' : 'btn-success'}`} onClick={onCheckAll}>
        <div className={`box ${!allDone && 'bg-dark'}`}></div>
        {allDone ? 'Uncheck all' : 'Check all'}
      </div>
      <div className={`btn btn-block rounded ${todosEmpty ? 'btn-light' : 'btn-warning'}`} onClick={onFilter}>
        Show {showDone ? 'all' : 'active'}
      </div>
      <div className={`btn btn-block rounded ${todosEmpty ? 'btn-light' : 'btn-danger'}`} onClick={onClear}>
        Clear todos 
      </div>
    </div>
    
  )
}

TodoBtnPanel.propTypes = {
  onClear: PropTypes.func.isRequired,
  onCheckAll: PropTypes.func.isRequired,
  allDone: PropTypes.bool.isRequired,
  todosEmpty: PropTypes.bool.isRequired,
  showDone: PropTypes.bool.isRequired,
  onFilter: PropTypes.func.isRequired,
}

export default TodoBtnPanel
