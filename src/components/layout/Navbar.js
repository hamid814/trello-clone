import React, { useContext } from 'react';

import UserContext from '../../context/user/userContext';
import BoardContext from '../../context/board/boardContext';

const Navbar = () => {
  const userContext = useContext(UserContext);
  const boardContext = useContext(BoardContext);

  const { clearCurrentBoardId, currentBoardId, setModal, toggleShowBoards } = userContext;
  const { getBoard } = boardContext;

  const homeClicked =() => {
    clearCurrentBoardId();
  }

  const addClicked = () => {
    setModal('on', 'addBoardModal');
  }

  const onBoardsClicked = () => {
    toggleShowBoards();
  }

  const navbarStyle = {
    background: getBoard(currentBoardId) && getBoard(currentBoardId).color
  }

  const titleTextStyle = {
    color: getBoard(currentBoardId) ? getBoard(currentBoardId).color : '#388d6a'
  }

  return (
    <div className='trello-navbar' style={navbarStyle}>
      <div>
        <div className='btn btn-square btn-transparent rounded' onClick={homeClicked}>
          <i className='fa fa-home'></i>
        </div>
        <div className='btn btn-narrow btn-transparent rounded' onClick={onBoardsClicked}>
          <i className='mr-1 fa fa-notes-medical'></i>
          boards
        </div>
      </div>
      <div className='mr-5'>
        <div className='text-white text-bold cursor-p border border-white border-bottom-0'>
          <div className='mr'>
            trello
          </div>
          <div 
            className='bg-white d-i-b border-0 pl'
            style={titleTextStyle}>
            clone
          </div>
        </div>
      </div>
      <div>
        <div className='btn btn-square btn-transparent rounded' onClick={addClicked}>
          <i className='fa fa-plus'></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar
