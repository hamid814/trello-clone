import React, { useState, useEffect, useContext } from 'react';

import UserContext from '../../context/user/userContext';
import BoardContext from '../../context/board/boardContext';

const FastEditModal = () => {
  const { currentBoardId, currentListId, fastEditModalPos, currentCard, clearCurrentCard } = useContext(UserContext);
  const { updateCard } = useContext(BoardContext);

  const [text, setText] = useState('');

  useEffect(() => {
    setText(currentCard.text);
    // eslint-disable-next-line
  }, []);

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
    <div style={modalPos} className='modal-content grid-2 gap-half'>
      <div style={rightWidth} className='p-1 pb-3'>
        <input
          className='m-0 border-0'
          type='text'
          value={text}
          onChange={onChange}
          onKeyUp={onKeyUp}/>
      </div>
      <div className='fast-edit-modal-action-container'>
        <div className='fast-edit-modal-action'>
        <i className='fas fa-tag mr'></i>
          Edit label
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
