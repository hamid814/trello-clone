import React, { useState, useContext } from 'react';

import UserContext from '../../context/user/userContext';

const AddBoardModal = () => {
  const { setModal } = useContext(UserContext);

  const [bg, setBg] = useState('#ee3a59')

  const onBgClicked = (e) => {
    setBg(e.target.id);
  }

  const onClose = () => {
    setModal('off');
  }

  const bgColor = {
    backgroundColor: bg
  }

  return (
    <div className='modal-content trello-add-board-modal-content'>
      <div className='grid-3-1'>
        <div className='p-1 grid-3-1' style={bgColor}>
          <div>
            <input
              type='text'
              className='m-0 border-0'/>
          </div>
          <div>
            <div className='close' onClick={onClose}>
              &times;
            </div>
          </div>
        </div>
        <div className='grid-3 gap-half' onClick={onBgClicked}>
          <div id='#ee3a59' className='rounded-lg p-1 bg-warning cursor-p'></div>
          <div id='#e27b47' className='rounded-lg p-1 bg-warning cursor-p'></div>
          <div id='#efca58' className='rounded-lg p-1 bg-warning cursor-p'></div>
          <div id='#46b29e' className='rounded-lg p-1 bg-warning cursor-p'></div>
          <div id='#344e5c' className='rounded-lg p-1 bg-warning cursor-p'></div>
          <div id='#344e5c' className='rounded-lg p-1 bg-warning cursor-p'></div>
          <div id='#344e5c' className='rounded-lg p-1 bg-warning cursor-p'></div>
        </div>
      </div>
      <div className='btn btn-light btn-narrow m text-bold'>
        Create Board
      </div>
    </div>
  )
}

export default AddBoardModal
