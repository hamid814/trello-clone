import React, { useState, useContext } from 'react';

import UserContext from '../../context/user/userContext';
import BoardContext from '../../context/board/boardContext';

const AddBoardModal = () => {
  const { setModal } = useContext(UserContext);
  const { addBoard } = useContext(BoardContext);

  const [bg, setBg] = useState('#ee3a59');
  const [text, setText] = useState('');

  const onBgClicked = (e) => {
    setBg(e.target.id);
  }

  const onClose = () => {
    setModal('off');
  }

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onBlur = () => {

  }

  const onKeyUp = () => {
    
  }

  const onAdd = () => {
    if(text !== '') {
      // addBoard();
    }
  }

  const bgColor = {
    backgroundColor: bg
  }

  return (
    <div className='modal-content trello-add-board-modal-content'>
      <div className='grid-3-1'>
        <div className='p-1 grid-3-1 rounded-lg' style={bgColor}>
          <div>
            <input
              type='text'
              placeholder='Add board title'
              value={text}
              onChange={onChange}
              className='m-0 border-0 text-bold text-light pl-1 rounded'/>
          </div>
          <div>
            <div className='close' onClick={onClose}>
              &times;
            </div>
          </div>
        </div>
        <div className='grid-3 gap-half' onClick={onBgClicked}>
          <div id='#ee3a59' className='rounded-lg p-1 label-red cursor-p'></div>
          <div id='#e27b47' className='rounded-lg p-1 label-orange cursor-p'></div>
          <div id='#efca58' className='rounded-lg p-1 label-yellow cursor-p'></div>
          <div id='#46b29e' className='rounded-lg p-1 label-blue-l cursor-p'></div>
          <div id='#344e5c' className='rounded-lg p-1 label-blue-d cursor-p'></div>
          <div></div>
          <div id='custom' className='rounded-lg p-1 bg-light cursor-p'></div>
        </div>
      </div>
      <div
        onClick={onAdd}
        className={`btn btn-narrow m text-bold ${text !== '' && 'btn-success'}`}>
          Create Board
      </div>
    </div>
  )
}

export default AddBoardModal
