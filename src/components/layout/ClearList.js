import React from 'react'

const ClearList = ({ onClear }) => {
  return (
    <div className='btn btn-danger btn-block' onClick={onClear}>
      clear todos 
    </div>
  )
}

export default ClearList
