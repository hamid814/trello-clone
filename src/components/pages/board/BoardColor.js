import React, { useState, useContext } from 'react';

import userContext from '../../../context/user/userContext'
import boardContext from '../../../context/board/boardContext'

const BoardColor = () => {
  const { currentBoardId } = useContext(userContext);
  const { getBoard, setColor } = useContext(boardContext);

  const [newColor, setNewColor] = useState(null)

  return (
    <div className='p-1'>
      color
    </div>
  )
}

export default BoardColor