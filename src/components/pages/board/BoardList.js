import React from 'react';
import BoardListItem from './BoardListItem';

const BoardList = ({ list }) => {
  return (
    <div className="trello-board-list">
      <div className="trello-board-list-header">
        { list.title }
      </div>
      <div className="trello-board-list-items">
        { list.items.map((i, index) => (
          <BoardListItem key={i.id} item={i} />
        )) }
      </div>
      <div className="trello-board-add-card">
        <div className="trello-board-plus">
          +       
        </div>
        { list.items.length === 0 ? 'Add a card' : 'Add another card' }      
      </div>
    </div>
  )
}

export default BoardList
