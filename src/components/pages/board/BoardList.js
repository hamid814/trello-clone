import React, { useState } from 'react';
import BoardListItem from './BoardListItem';

const BoardList = ({ list }) => {
  const [wantToAddCard, setWantToAddCard] = useState(false);
  const [newCardText, setNewCardText] = useState('');

  const onAddCardClick = () => {
    setWantToAddCard(true);
    document.querySelector('#card-compose-textarea').focus();
  }

  const onTextareaBlur =() => {
    setWantToAddCard(false);
  }

  return (
    <div className='trello-board-list'>
      <div className='trello-board-list-header'>
        { list.title }
      </div>
      <div className='trello-board-list-items'>
        { list.items.map((i, index) => (
          <BoardListItem key={i.id} item={i} />
        )) }
        <div className={`trello-board-list-item trello-board-card-compose  ${!wantToAddCard && 'd-n'}`}>
          <textarea
            className='trello-board-card-compose-textarea'
            id='card-compose-textarea'
            placeholder='Enter a title for this card'
            onBlur={onTextareaBlur}>

          </textarea>
        </div>
      </div>
      <div className='trello-board-add-card' onClick={onAddCardClick}>
        <div className='trello-board-plus'>
          +       
        </div>
        { !wantToAddCard
          ? list.items.length === 0 ? 'Add a card' : 'Add another card'
          : 'adding panel and stuff'  
        }      
      </div>
    </div>
  )
}

export default BoardList
