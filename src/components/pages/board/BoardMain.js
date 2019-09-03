import React from 'react';
import BoardList from './BoardList';
import AddList from './AddList';

const BoardMain = ({ board, boardFuncs /* contains all of board context  */ }) => {
  const mainStyle = {
    background: board && board.color
  }

  return (
    <div className='trello-board-main' style={mainStyle}>
      { board &&
        board.lists.map(l => (
          <div key={l.id} className='trello-board-list-wrapper'>
            <BoardList list={l} boardFuncs={boardFuncs} />
          </div>
        )) }
      <div className='trello-board-list-wrapper'>
        <AddList board={board} />
      </div>
    </div>
  )
}

export default BoardMain
