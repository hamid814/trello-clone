import React, { useContext } from 'react';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const CheckListItem = ({ item, clId }) => {
  const { currentBOardid, currentListId,currentCard } = useContext(UserContext);
  const { updateCard } = useContext(BoardContext);

  const onChange = () => {
    const newCard = {
      ...currentCard,
      checklists: currentCard.checklists.map(c => {
        if(c.id === clId) {
          c.items = c.items.map(i => {
            if(i.id === item.id) {
              item.done = !item.done
            }
            return i
          })
        }
        return c
      })
    }

    updateCard(currentBOardid, currentListId, currentCard.id, newCard)
  }

  const  ifDone = {
    textDecoration: item.done ? 'line-through' : 'none'
  }
  
  return (
    <div className='checklist-item'>
      <input type="checkbox" defaultChecked={item.done} onChange={onChange} className='mt-0 mb-0'/>
      <div style={ifDone} className='d-i-b text-85'>
        { item.text }
      </div>
    </div>
  )
}

export default CheckListItem
