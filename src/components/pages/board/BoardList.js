import React from 'react';
import BoardListItem from './BoardListItem';

const BoardList = ({ list }) => {
  return (
    <div className="trello-board-list">
      <div className="trello-board-list-header">
        { list.title }
      </div>
      <div className="trello-board-list-items">
        { list.items.map(i => (
          <BoardListItem key={i.id} item={i} />
        )) }
      </div>
    </div>
  )
}

export default BoardList
