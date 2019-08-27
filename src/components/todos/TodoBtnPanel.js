import React from 'react'

const TodoBtnPanel = ({ onClear, onCheckAll, allChecked, todosEmpty, display }) => {
  return (
    <div className='grid-3 form-container mt-0'>
      <div className={`btn btn-block rounded ${todosEmpty ? 'btn-light' : 'btn-success'}`} onClick={onCheckAll}>
        <div className={`box ${!allChecked && 'bg-dark'}`}></div>
        {allChecked ? 'Uncheck all' : 'check all'}
      </div>
      <div className={`btn btn-block rounded ${todosEmpty ? 'btn-light' : 'btn-warning'}`} onClick={onClear}>
        show {display === 'all' ? 'active' : 'all'}
      </div>
      <div className={`btn btn-block rounded ${todosEmpty ? 'btn-light' : 'btn-danger'}`} onClick={onClear}>
        clear todos 
      </div>
    </div>
    
  )
}

export default TodoBtnPanel
