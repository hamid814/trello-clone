import React, { useState, useContext } from 'react';
import uuid from 'uuid';

import UserContext from '../../context/user/userContext';
import BoardContext from '../../context/board/boardContext';

const FastEditModal = () => {
  const { currentBoardId, CurrentListId, fastEditModalPos, currentCard, clearCurrentCard } = useContext(UserContext);
  const { updateCard } = useContext(BoardContext);
  console.log(currentBoardId)

  console.log(currentCard)

  const [text, setText] = useState('')

  const modalPos = {
    position: 'absolute',
    top: fastEditModalPos.top + 'px',
    left: fastEditModalPos.left + 'px',
    width: fastEditModalPos.width + 'px',
    background: '#ccc',
    padding: 10
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
      id: uuid.v4()
    }
    updateCard(currentBoardId, CurrentListId, currentCard.id, newCard);
    clearCurrentCard();
  }

  return (
    <div style={modalPos} className='modal-content'>
      <input
        type='text'
        value={text}
        onChange={onChange}
        onKeyUp={onKeyUp}/>
    </div>
  )
}

export default FastEditModal
