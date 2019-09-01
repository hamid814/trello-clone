import React from 'react';
import BoardList from './BoardList';

const BoardMain = ({ board, boardFuncs /* contains all of board context  */ }) => {
  return (
    <div className="trello-board-main">
      { board &&
        board.lists.map(l => (
          <div className="trello-board-list-wrapper">
            <BoardList key={l.id} list={l} />
          </div>
        )) }
      <div className="trello-board-list">
        <div className="trello-board-add-list">
          { board && board.lists.length === 0 ? '+ Add a list' : '+ Add another list' }
        </div>
      </div>
    </div>
  )
}

export default BoardMain