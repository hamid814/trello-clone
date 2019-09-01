import React, { useState } from 'react';
import BoardListItem from './BoardListItem';

const BoardList = ({ list, boardFuncs /* all of board context */ }) => {
  const [wantToAddCard, setWantToAddCard] = useState(false);
  const [newCardText, setNewCardText] = useState('');

  const onAddCardClick = () => {
    setWantToAddCard(true);
    setTimeout(() => {
      document.querySelector('#card-compose-textarea').focus();
    }, 100);
  }

  const onChange = (e) => {
    setNewCardText(e.target.value);
  }

  const onTextareaBlur =() => {
    if(newCardText !== '') {
      // three parameters 1.text 2.list id 3.board id
      boardFuncs.addCard(newCardText, list.id, 1);
      setNewCardText('');
    } else {
      setWantToAddCard(false);
    }
    console.log('get third id from user state');
  }

  const onKeyUp = (e) => {
    if(e.keyCode === 13) {
      onTextareaBlur();
    }
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
            onBlur={onTextareaBlur}
            onKeyUp={onKeyUp}
            onChange={onChange}
            value={newCardText}>

          </textarea>
        </div>
      </div>
      <div className='trello-board-add-card' onClick={onAddCardClick}>
        { !wantToAddCard
          ? list.items.length === 0 ? '+ Add a card' : '+ Add another card'
          : ('adding panel and stuff')  
        }      
      </div>
    </div>
  )
}

export default BoardList
