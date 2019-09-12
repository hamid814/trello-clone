import React, { useContext } from 'react';

import UserContext from '../../../context/user/userContext';

const ListActions = () => {
  const { currentListId, setOptionsModal, setOptionsModalStep, setAddCardFromListActions } = useContext(UserContext);

  const onAddCardClicked = () => {
    setAddCardFromListActions(currentListId);
    setOptionsModal('off');
  }

  const onCopyClicked = () => {
    setOptionsModal('on', 'copyList');
    setOptionsModalStep('on', 'listActions');
  }

  const onMoveClicked = () => {
    setOptionsModal('on', 'moveList');
    setOptionsModalStep('on', 'listActions');
  }

  const onDeleteClicked = () => {
    setOptionsModal('on', 'deleteList');
    setOptionsModalStep('on', 'listActions');
  }

  return (
    <div>
      <div className='list-action-item' onClick={onAddCardClicked}>
        add card...
      </div>
      <div className='list-action-item' onClick={onCopyClicked}>
        copy list
      </div>
      <div className='list-action-item' onClick={onMoveClicked}>
        move list
      </div>
      <div className='list-action-item'>
        watch
      </div>
      <hr />
      <div className='list-action-item'>
        move all cards in this list list
      </div>
      <div className='list-action-item'>
        delete all cards in this list
      </div>
      <div className='list-action-item'>
        sort...
      </div>
      <hr />
      <div className='list-action-item delete-list' onClick={onDeleteClicked}>
        delete this list
      </div>
    </div>
  )
}

export default ListActions
