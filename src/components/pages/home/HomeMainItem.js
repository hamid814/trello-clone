import React, { useContext } from 'react';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const HomeMainItem = ({ board }) => {
  const userContext = useContext(UserContext);
  const boardContext = useContext(BoardContext);

  const { setCurrentBoardId } = userContext;
  const { setStar } = boardContext;

  const itemStyle = {
    background: board.color
  }

  const onClick = (e) => {
    if(!e.target.classList.contains('fa-star')) {
      setCurrentBoardId(board.id);
    }
  }

  const onStarClicked = () => {
    setStar(board.id);
  }

  return (
    <div
      className='trello-home-main-item mt-1 mr-1'
      style={itemStyle}
      onClick={onClick}>
        <div className='text-white func-title'>
          {board.title}
        </div>
        <div
          className='trello-home-main-item-star'
          onClick={onStarClicked}>
          <i className={`fa-star ${board.starred ? 'fas text-warning' : 'far'}`}></i>
        </div>
    </div>
  )
}

export default HomeMainItem
