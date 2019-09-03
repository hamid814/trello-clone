import React from 'react'

const AddList = ({ board }) => {
  // console.log(board)
  return (
    <div className='trello-board-add-list'>
      { board && board.lists.length === 0 ? '+ Add a list' : '+ Add another list' }
    </div>
  )
}

export default AddList
