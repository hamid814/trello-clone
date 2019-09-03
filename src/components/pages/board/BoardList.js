import React, { Fragment, useState, useContext } from 'react';
import BoardListItem from './BoardListItem';

import UserContext from '../../../context/user/userContext';

const BoardList = ({ list, boardFuncs /* all of board context */ }) => {
  const userContext = useContext(UserContext);

  const { currentBoardId } = userContext;

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

  const onTextareaBlur = () => {
    if(newCardText !== '') {
      addCard();
    } else {
      cancelAddCard();
    }
  }

  const onKeyUp = (e) => {
    if(e.keyCode === 13 && newCardText.length > 1) {
      addCard();
    } else if(e.keyCode === 13 && newCardText.length === 1) {
      setNewCardText('');
    }
  }

  const addCard = () => {
    if(newCardText !== '') {
      // three parameters: 1.text 2.list id 3.board id
      boardFuncs.addCard(newCardText, list.id, currentBoardId);
      setNewCardText('');
    }
  }

  const cancelAddCard = () => {
    setWantToAddCard(false);
    setNewCardText('');
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
      <div className={`trello-board-footer ${!wantToAddCard && 'hover cursor-p'}`}>
        { !wantToAddCard
          ?  (<div onClick={onAddCardClick}>
                {list.items.length === 0 ? '+ Add a card' : '+ Add another card'}
              </div>) 
          : (
            <Fragment>
              <div className='btn btn-success' onClick={addCard}>
                Add Card
              </div>
              <div className='d-i-b cursor-p ml-1 text-lg lighten-60 hover' onClick={cancelAddCard}>
                &times;
              </div>
            </Fragment>
          )  
        }      
      </div>
    </div>
  )
}

export default BoardList
