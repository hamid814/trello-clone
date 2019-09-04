import React, { useState, useContext } from 'react';

import UserContext from '../../context/user/userContext';
import BoardContext from '../../context/board/boardContext';

const FastEditModal = () => {
  const { currentBoardId, currentListId, fastEditModalPos, currentCard, clearCurrentCard } = useContext(UserContext);
  const { updateCard } = useContext(BoardContext);

  const [text, setText] = useState('')

  const modalPos = {
    position: 'absolute',
    top: fastEditModalPos.top + 'px',
    left: fastEditModalPos.left + 'px',
    // width: fastEditModalPos.width + 'px',
  }

  const rightWidth = {
    width: fastEditModalPos.width + 'px',
    background: '#ccc',
  }

  const temp = {
    animation: 'tempAnim 100ms ease-in',
    background: '#ccc',
    padding: '0.2rem 1rem',
    display: 'inline-block',

  }

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onKeyUp = (e) => {
    if(e.keyCode === 13) {
      onUpdate();
    }
  }

  const onUpdate = () => {
    const newCard = {
      ...currentCard,
      text
    }
    updateCard(currentBoardId, currentListId, currentCard.id, newCard);
    clearCurrentCard();
  }

  return (
    <div style={modalPos} className='modal-content grid-2'>
      <div style={rightWidth} className='p-1 pb-3'>
        <input
          className='m-0 border-0'
          type='text'
          value={text}
          onChange={onChange}
          onKeyUp={onKeyUp}/>
      </div>
      <div>
        <div style={temp}>
          set label
        </div>
      </div>
      <div>
        <div className='btn btn-success' onClick={onUpdate}>
          Save
        </div>
      </div>
    </div>
  )
}

export default FastEditModal
