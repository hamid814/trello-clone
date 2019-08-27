import React from 'react'

const Congrats = ({ allDone }) => {
  return (
    <div className={`form-container my-0 ${!allDone && 'd-n'}`}>
      <div className='alert alert-success text-center text-bold'>
        Nice Job!
        Yoy have done all your works  
      </div>  
    </div>
  )
}

export default Congrats
