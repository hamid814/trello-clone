import React, { useContext } from 'react';

import UserContext from '../../../context/user/userContext';

const ListActions = () => {
  const { currentListId, setOptionsModal, setOptionsModalStep } = useContext(UserContext);

  const onDeleteClicked = () => {
    setOptionsModal('on', 'deleteList');
    setOptionsModalStep('on', 'listActions');
  }


  const test = () => {
    console.log(currentListId)
  }

  return (
    <div>
      <div className='list-action-item' onClick={test}>
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
