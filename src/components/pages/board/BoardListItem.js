import React, { useContext } from 'react'

import UserContext from '../../../context/user/userContext';

const BoardListItem = ({ item }) => {
  const { setCurrentCard, setModal, setFastEditModalPos } = useContext(UserContext);

  const onClick = (e) => {
    if(!e.target.classList.contains('func-e-btn') && !e.target.parentElement.classList.contains('func-e-btn')) {
      setModal('on', 'detailsModal');
    }
    setCurrentCard(item);
  }

  const onEBtnClick = (e) => {
    console.log('use useRef here for setFastEditModalPos')
    if(e.target.classList.contains('func-e-btn')) {
      setFastEditModalPos({
        top: e.target.parentElement.getBoundingClientRect().top,
        left: e.target.parentElement.getBoundingClientRect().left,
        width: e.target.parentElement.getBoundingClientRect().width
      });
    } else {
      setFastEditModalPos({
        top: e.target.parentElement.parentElement.getBoundingClientRect().top,
        left: e.target.parentElement.parentElement.getBoundingClientRect().left,
        width: e.target.parentElement.parentElement.getBoundingClientRect().width
      });
    }
    setModal('on', 'fastEditModal');
  }

  let timer;
  const touchduration = 500;

  const onTouchStart = () => {
    timer = setTimeout(onlongtouch, touchduration); 
  }

  const onTouchEnd = () => {
    if (timer) {
      clearTimeout(timer); // clearTimeout, not cleartimeout..
    }
  }

  const onlongtouch = (e) => {
    setFastEditModalPos({
      top: e.target.parentElement.getBoundingClientRect().top,
      left: e.target.parentElement.getBoundingClientRect().left,
      width: e.target.parentElement.getBoundingClientRect().width
    });
    setModal('on', 'fastEditModal');
  }

  return (
    <div
      className='trello-board-list-item'
      onClick={onClick}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}>
        <div>
          { item.text }
          <div className='text-sm'>
            { item.desc && item.desc }
          </div>
        </div>
        <div className='func-e-btn trello-board-list-item-edit-btn' onClick={onEBtnClick}>
          <i className='fas fa-pen'></i>
        </div>
    </div>
  )
}

export default BoardListItem
