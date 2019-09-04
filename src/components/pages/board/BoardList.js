import React, { Fragment, useState, useContext } from 'react';
import BoardListItem from './BoardListItem';

import UserContext from '../../../context/user/userContext';
import AlertContext from '../../../context/alert/alertContext';

const BoardList = ({ list, boardFuncs /* all of board context */ }) => {
  const userContext = useContext(UserContext);
  const alertContext = useContext(AlertContext);

  const { setCurrentListId, currentBoardId } = userContext;
  const { setAlert } = alertContext;

  const [wantToAddCard, setWantToAddCard] = useState(false);
  const [newCardText, setNewCardText] = useState('');

  const onAddCardClick = () => {
    !wantToAddCard && setWantToAddCard(true);
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
      setAlert('card added', 'success');
      setNewCardText('');
    }
  }

  const cancelAddCard = () => {
    setWantToAddCard(false);
    setNewCardText('');
  }

  const onListCLick = () => {
    setCurrentListId(list.id);
    console.log(list.id)
  }

  return (
    <div className='trello-board-list' onClick={onListCLick}>
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
      <div
        className={`trello-board-footer ${!wantToAddCard && 'hover cursor-p'}`}
        onClick={onAddCardClick}>
        { !wantToAddCard
          ?  (<div>
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
