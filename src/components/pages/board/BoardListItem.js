import React from 'react'

const BoardListItem = ({ item }) => {
  return (
    <div className='trello-board-list-item'>
      { item.text }
    </div>
  )
}

export default BoardListItem
