import React, { useContext } from 'react';

import userContext from '../../../context/user/userContext';

const BoardMenu = () => {
  const { setOptionsModal, setShowMenu } = useContext(userContext)

  const onClose = () => {
    setShowMenu()
  }

  const onDelete = () => {
    setOptionsModal('on', 'deleteBoard')
  }

  return (
    <>
      <div className='close' onClick={onClose}>
        &times;
      </div>
      <div className='board-menu-list'>
        <div className='board-menu-item'>
          board menu
        </div>
        <div className='board-menu-item'>
          board color
        </div>
        <div className='board-menu-item hover-danger' onClick={onDelete}>
          delete board
        </div>
      </div>
    </>
  )
}

export default BoardMenu
