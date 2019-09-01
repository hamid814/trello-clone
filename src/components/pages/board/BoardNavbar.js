import React, { useState } from 'react';

const BoardNavbar = ({ board, setStar, setDescription }) => {
  const [descText, setDescText] = useState('');
  const [isSettingDesc, setIsSettingDesc] = useState(false);
  
  const onStarClick = () => {
    setStar(board.id);
  }

  const onDescClick =() => {
    setIsSettingDesc(true);
  }

  const onDescTextChange = (e) => {
    setDescText(e.target.value);
  }

  const onSetDesc = () => {
    setDescription(descText, board.id);
    setIsSettingDesc(false);
  }

  return (
    <div className='trello-board-navbar trello-navbar lighten-20'>
      <div className='card border-0 m-0 p-0'>
        <div className='btn btn-primary btn-narrow m-0'>
          { board && board.title }
        </div>
        <div className='btn btn-primary btn-square rounded-lg lighten-20 ml-1' onClick={onStarClick}>
          <i className={`fa-star ${board && board.starred ? 'fas text-warning' : 'far'}`}></i>
        </div>
        <div className="ml-1 d-i-b text-white">
          { 
            board
            && !isSettingDesc
              ? board.description
              : <input
                  type="text"
                  className="m-0 rounded"
                  value={descText}
                  onChange={onDescTextChange}
                  onBlur={onSetDesc} />
          }
        </div>
        <div className='btn btn-primary btn-square rounded-lg lighten-20 ml-1' onClick={onDescClick}>
          <i className='fas fa-pen'></i>
        </div>
      </div>
    </div>
  )
}

export default BoardNavbar
