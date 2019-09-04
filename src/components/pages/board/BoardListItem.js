import React, { useContext } from 'react'

import UserContext from '../../../context/user/userContext';

const BoardListItem = ({ item }) => {
  const { setCurrentCard, setModal, setFastEditModalPos } = useContext(UserContext);

  const onClick = (e) => {
    if(!e.target.classList.contains('func-e-btn')) {
      console.log('open edit modal')
    }
  }

  const onEBtnClick = (e) => {
    setFastEditModalPos({
      top: e.target.parentElement.getBoundingClientRect().top,
      left: e.target.parentElement.getBoundingClientRect().left,
      width: e.target.parentElement.getBoundingClientRect().width
    });
    setCurrentCard(item);
    setModal('on', 'fastEditModal');
  }

  return (
    <div className='trello-board-list-item' onClick={onClick}>
      <div>
        { item.text }
        <div className='text-sm'>
          { item.desc && item.desc }
        </div>
      </div>
      <div className='func-e-btn trello-board-list-item-edit-btn' onClick={onEBtnClick}>
        <i className="fas fa-pen"></i>
      </div>
    </div>
  )
}

export default BoardListItem
