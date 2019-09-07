import React, { useState } from 'react';

const LabelItem = ({ label, setLabelId, setState }) => {
  const [hover, setHover] = useState(false);

  const onClick = () => {
    setLabelId(label.id);
  }

  const onMouseEnter = () => {
    setHover(true);
  }

  const onMouseLeave = () => {
    setHover(false);
  }

  const onPenClick = () => {
    setState('edit');
  }

  return (
    <div className='label-item mb width-100'>
      <div
        className={`rounded d-i-b label-color label-color-${label.colorName} ${hover && `label-color-${label.colorName}-hover`}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}>
        <div className='text-85 ml'>
          { label.name !== '' && label.name }
        </div>
      </div>
      <div className='btn btn-square btn-no-bg d-i-b float-right' onClick={onPenClick}>
        <i className='fas fa-pen text-sm'></i>
      </div>
    </div>
  )
}

export default LabelItem
