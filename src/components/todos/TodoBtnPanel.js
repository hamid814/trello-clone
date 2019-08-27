import React from 'react'

const TodoBtnPanel = ({ onClear, onCheckAll, allChecked }) => {
  return (
    <div className='grid-3'>
      <div className='btn btn-success btn-block rounded' onClick={onCheckAll}>
        <div className={`box ${!allChecked && 'bg-dark'}`}></div>
        {allChecked ? 'Uncheck all' : 'check all'}
      </div>
      <div className='btn btn-warning btn-block rounded' onClick={onClear}>
        active/all
      </div>
      <div className='btn btn-danger btn-block rounded' onClick={onClear}>
        clear todos 
      </div>
    </div>
    
  )
}

export default TodoBtnPanel
