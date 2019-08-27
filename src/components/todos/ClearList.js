import React from 'react'

const ClearList = ({ onClear }) => {
  return (
    <div className="grid-3">
      <div className='btn btn-success btn-block rounded' onClick={onClear}>
        check all
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

export default ClearList
