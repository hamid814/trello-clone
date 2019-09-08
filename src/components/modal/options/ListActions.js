import React, { useContext } from 'react';

import BoardContext from '../../../context/board/boardContext';
import UserContext from '../../../context/user/userContext';

const ListActions = () => {
  // const { deleteList } = useContext(BoardContext);
  const { currentListId } = useContext(UserContext);

  const onDeleteClicked = () => {
    // deleteList(currentListId);
    console.log(currentListId);
  }

  return (
    <div>
      <div className='list-action-item'>
        add card...
      </div>
      <div className='list-action-item'>
        move list
      </div>
      <div className='list-action-item'>
        move all cards in this list list
      </div>
      <div className='list-action-item'>
        delete all cards in this list
      </div>
      <div className='list-action-item'>
        copy list
      </div>
      <div className='list-action-item'>
        sort...
      </div>
      <div className='list-action-item'>
        watch
      </div>
      <div className='list-action-item delete-list' onClick={onDeleteClicked}>
        delete this list
      </div>
    </div>
  )
}

export default ListActions
