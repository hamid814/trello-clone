import React from 'react'

const LabelItem = ({ label }) => {
  const onMouseIn = () => {

  }

  const onMouseOut = () => {

  }

  return (
    <div className='mb-1 width-100'>
      <div className='pt-1 pb- 1 rounded d-i-b label-color' onMouseIn={onMouseIn} onMouseOut={onMouseOut}>
        <div className='float-left'>
          { label.name !== '' && label.name }
        </div>
        <div className='btn btn-square btn-no-bg d-i-b float-right'>
          <i className="fas fa-pen"></i>
        </div>
      </div>
    </div>
  )
}

export default LabelItem
