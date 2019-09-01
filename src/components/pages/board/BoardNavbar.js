import React, { useState } from 'react';
import BoardTitle from './BoardTitle';

const BoardNavbar = ({ board, setStar, setDescription, setTitle }) => {
  const [descText, setDescText] = useState('');
  const [isSettingDesc, setIsSettingDesc] = useState(false);
  
  const onStarClick = () => {
    setStar(board.id);
  }

  const onDescClick =() => {
    setIsSettingDesc(true);
    setDescText(board.description);
    document.querySelector('#description-input').focus();
  }

  const onDescTextChange = (e) => {
    e.target.value.length < 51 && setDescText(e.target.value);
    console.log('set alert for maximum length')
  }

  const onSetDesc = () => {
    setDescription(descText, board.id);
    setIsSettingDesc(false);
  }

  const onKeyUp = (e) => {
    if(e.keyCode === 13) {
      onSetDesc();
    }
  }

  return (
    <div className='trello-board-navbar trello-navbar lighten-20'>
      <div className='card border-0 m-0 p-0'>
        { board && <BoardTitle title={board.title} setTitle={setTitle} /> }
        <div className='btn btn-primary btn-square rounded-lg lighten-20 ml-1' onClick={onStarClick}>
          <i className={`fa-star ${board && board.starred ? 'fas text-warning' : 'far'}`}></i>
        </div>
        <div className='ml-1 d-i-b text-white'>
          { 
            board
            && !isSettingDesc
              && (board.description ? board.description : 'no description')
          }
        <input
          type='text'
          id='description-input'
          className={`m-0 rounded ${!isSettingDesc && 'd-n'}`}
          value={descText}
          onChange={onDescTextChange}
          onBlur={onSetDesc}
          onKeyUp={onKeyUp} />
        </div>
        <div className='btn btn-primary btn-square rounded-lg lighten-20 ml-1' onClick={onDescClick}>
          <i className='fas fa-pen'></i>
        </div>
      </div>
    </div>
  )
}

export default BoardNavbar
