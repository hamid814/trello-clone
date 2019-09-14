import React, { useContext } from 'react';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const ChecklistItemActions = () => {
  const { currentBoardId, currentListId, currentCard, setOptionsModal,  data } = useContext(UserContext)
  const { addCard, updateCard } = useContext(BoardContext)

  const onDelete = () => {
    const newCard = {
      ...currentCard,
      checklists: currentCard.checklists.map(c => {
        if(c.id === data.checklistId) {
          c.items = c.items.filter(i => i.id !== data.item.id)
        }
        return c
      })
    }

    updateCard(currentBoardId, currentListId, currentCard.id, newCard);
    setOptionsModal('off');
  }

  const onConvertToCard = () => {
    onDelete();
    addCard(data.item.text, currentListId, currentBoardId);
    setOptionsModal('off');
  }

  return (
    <div>
      <div className='list-action-item' onClick={onConvertToCard}>
        convert to card
      </div>
      <div className='list-action-item' onClick={onDelete}>
        delete
      </div>
    </div>
  )
}

export default ChecklistItemActions
