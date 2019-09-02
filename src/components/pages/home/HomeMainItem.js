import React, { useContext } from 'react';

import UserContext from '../../../context/user/userContext';

const HomeMainItem = ({ board }) => {
  const userContext = useContext(UserContext);

  const { setCurrentBoardId } = userContext;

  const itemStyle = {
    background: board.color
  }

  const onClick = () => {
    setCurrentBoardId(board.id);
  }

  return (
    <div
      className='trello-home-main-item mt-1 mr-1'
      style={itemStyle}
      onClick={onClick}>
        {board.title}
    </div>
  )
}

export default HomeMainItem
