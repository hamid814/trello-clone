import React from 'react'

const BoardListItem = ({ item }) => {
  const onClick = (e) => {
    if(!e.target.classList.contains('func-e-btn')) {
      console.log('open edit modal')
    }
  }

  const onEBtnClick = () => {
    console.log('fast edit clicked')
  }

  return (
    <div className='trello-board-list-item' onClick={onClick}>
      <div>
        { item.text }
        <div className='text-sm'>
          { item.desc && item.desc }
        </div>
      </div>
      <div className='func-e-btn trello-board-list-item-edit-btn' onClick={onEBtnClick}>
        e
      </div>
    </div>
  )
}

export default BoardListItem
