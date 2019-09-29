import React, { useContext } from 'react';

import boardContext from '../../context/board/boardContext';
import userContext from '../../context/user/userContext';

const ListOfBoardsItem = ({ board, isRecent }) => {
  isRecent && console.log('add X btn if its recent to delte from recent')

  const { setCurrentBoardId, keepBoardsList, toggleShowBoardsList, deleteFromRecent } = useContext(userContext)
  const { setStar } = useContext(boardContext)

  const onClick = (e) => {
    if(!e.target.classList.contains('func-icon') && !e.target.classList.contains('func-star') && !e.target.classList.contains('func-recent-x')) {
      setCurrentBoardId(board.id);
      !keepBoardsList && toggleShowBoardsList()
    }
  }

  const onStarCLick = () => {
    setStar(board.id);
  }

  const onDeleteFromRecentClick = () => {
    deleteFromRecent(board.id);
  }

  const thisStyle = {
    background: board.color
  }

  return (
    <div style={thisStyle} className='item hover' onClick={onClick}>
      <div className='left'>
      
      </div>
      <div className='right lighten-70 height-100'>
        { board.title }
      </div>
      <div className={`func-star star text-sm ${board.starred && 'stay text-warning darken-40'}`} onClick={onStarCLick}>
        <i className='func-icon fas fa-star'>
        
        </i>
      </div>
      {
        isRecent && <div className={`func-recent-x close`} onClick={onDeleteFromRecentClick}>
                      &times;
                    </div>
      }
    </div>
  )
}

export default ListOfBoardsItem
