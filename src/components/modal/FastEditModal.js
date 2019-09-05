import React, { useState, useEffect, useContext } from 'react';

import UserContext from '../../context/user/userContext';
import BoardContext from '../../context/board/boardContext';

const FastEditModal = () => {
  const {
    currentBoardId,
    currentListId,
    fastEditModalPos,
    currentCard,
    clearCurrentCard,
    setModal } = useContext(UserContext);
  const { updateCard } = useContext(BoardContext);

  const [text, setText] = useState('');

  useEffect(() => {
    setText(currentCard.text);
    // eslint-disable-next-line
  }, []);

  const modalPos = {
    position: 'absolute',
    top: fastEditModalPos.top + 'px',
    left: fastEditModalPos.left + 'px'
  }

  const rightWidth = {
    width: fastEditModalPos.width + 'px'
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
    setModal('off');
  }

  return (
    <div style={modalPos} className='modal-content grid-2 gap-half'>
      <div style={rightWidth} className='fast-edit-modal-right'>
        <textarea
          className='m-0 border-0'
          value={text}
          onChange={onChange}
          onKeyUp={onKeyUp}/>
        <div className='btn btn-success mt-1' onClick={onUpdate}>
          Save
        </div>
      </div>
      <div className='fast-edit-modal-action-container'>
        <div className='fast-edit-modal-action'>
          <div className="fast-edit-modal-action-btn">
            <i className='fas fa-tag mr'></i>
            Edit label
          </div>
        </div>
        <div className='fast-edit-modal-action'>
          <div className="fast-edit-modal-action-btn">
            <i className='fas fa-user mr'></i>
            Change members
          </div>
        </div>
        <div className='fast-edit-modal-action'>
          <div className="fast-edit-modal-action-btn">
            <i className='fas fa-arrow-right mr'></i>
            Move
          </div>
        </div>
        <div className='fast-edit-modal-action'>
          <div className="fast-edit-modal-action-btn">
            <i className='fas fa-trash mr'></i>
            Delete card
          </div>
        </div>
      </div>
    </div>
  )
}

export default FastEditModal
