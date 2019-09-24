import React, { useContext } from 'react';

import userContext from '../../../context/user/userContext';

const BoardMenu = () => {
  const { setShowMenu } = useContext(userContext)

  const onClose = () => {
    setShowMenu()
  }

  return (
    <div>
      <div className='close' onClick={onClose}>
        &times;
      </div>
      <div>
        board menu
      </div>
      <div>
        list
      </div>
    </div>
  )
}

export default BoardMenu
