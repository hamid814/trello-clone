import React, { useContext } from 'react';

import userContext from '../../../context/user/userContext';
import boardContext from '../../../context/board/boardContext';

const BoardMenu = () => {
  const { currentBoardId, setOptionsModal, setShowMenu } = useContext(userContext)
  const { getBoard, setBoardWatching } = useContext(boardContext)

  const onClose = () => {
    setShowMenu()
  }

  const onWatcingClicked = () => {
    setBoardWatching(currentBoardId);
  }

  const onClearBoard = () => {
    setOptionsModal('on', 'clearBoard')
  }

  const onDelete = () => {
    setOptionsModal('on', 'deleteBoard')
  }

  return (
    <>
      <div className='close' onClick={onClose}>
        &times;
      </div>
      <h3 className='pb-1'>
        Menu
      </h3>
      <hr/>
      <div className='board-menu-list'>
        <div className='board-menu-item'>
          board menu
        </div>
        <div className='board-menu-item' onClick={onWatcingClicked}>
          watch
          <i className={`fas fa-check text-sm ml ${!getBoard(currentBoardId).watching && 'd-n'}`}></i>
        </div>
        <div className='board-menu-item'>
          change board color
        </div>
        <div className='board-menu-item' onClick={onClearBoard}>
          clear baord
        </div>
        <div className='board-menu-item hover-danger' onClick={onDelete}>
          delete board
        </div>
      </div>
    </>
  )
}

export default BoardMenu
