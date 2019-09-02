import React, { useContext } from 'react';

import UserContext from '../../context/user/userContext';
import BoardContext from '../../context/board/boardContext';

const Navbar = () => {
  const userContext = useContext(UserContext);
  const boardContext = useContext(BoardContext);

  const { clearCurrentBoardId, currentBoardId } = userContext;
  const { getBoard } = boardContext;

  const homeClick =() => {
    clearCurrentBoardId();
    console.log(titleStyle)
  }

  const navbarStyle = {
    background: getBoard(currentBoardId) && getBoard(currentBoardId).color
  }

  const titleStyle = {
    color: getBoard(currentBoardId) && getBoard(currentBoardId).color
  }

  return (
    <div className='trello-navbar' style={navbarStyle}>
      <div>
        <div className='btn btn-square btn-light op-8 rounded-lg' onClick={homeClick}>
          <i className='fa fa-home'></i>
        </div>
        <div className='btn btn-narrow btn-light op-8 rounded-lg'>
          <i className='mr-1 fa fa-notes-medical'></i>
          boards
        </div>
        <div className='d-i-b rounded-lg'>
          <input type='text' className='m-0 bg-light op-8 border-0 rounded-lg' id='search-input'/>
        </div>
      </div>
      <div className='mr-5'>
        <div className='text-white text-bold cursor-p border border-white border-bottom-0'>
          <div className='m mt-0 ml-0 mb-0'>
            trello
          </div>
          <div
            className='bg-white text-primary d-i-b border-0 p pt-0 pb-0 pr-0'
            style={{titleStyle}}>
            clone
          </div>
        </div>
      </div>
      <div>
        <div className='btn btn-square btn-light op-8 rounded-lg'>
          <i className='fa fa-plus'></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar
