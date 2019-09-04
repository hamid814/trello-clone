import React, { useState, useContext } from 'react';
import BoardTitle from './BoardTitle';

import AlertContext from '../../../context/alert/alertContext';

const BoardNavbar = ({ board, setStar, setDescribtion, setTitle }) => {
  const { setAlert } = useContext(AlertContext);

  const [descText, setDescText] = useState('');
  const [isSettingDesc, setIsSettingDesc] = useState(false);
  
  const onStarClick = () => {
    setStar(board.id);
    setAlert(`${board.starred ? 'board added to favorites' : 'board removed from favorites'}`, `${board.starred ? 'success' : 'dark'}`, 2000);
  }

  const onDescClick =() => {
    setIsSettingDesc(true);
    setDescText(board.describtion);
    document.querySelector('#describtion-input').focus();
  }

  const onDescTextChange = (e) => {
    e.target.value.length < 51
      ? setDescText(e.target.value)
      : setAlert('describtion can not be longer than 50 chars!!!', 'warning', 4000)
  }

  const onSetDesc = () => {
    setDescribtion(descText, board.id);
    setIsSettingDesc(false);
  }

  const onKeyUp = (e) => {
    if(e.keyCode === 13) {
      onSetDesc();
    }
  }

  const navbarStyle = {
    background: board && board.color
  }

  return (
    <div className='trello-board-navbar trello-navbar lighten-20' style={navbarStyle}>
      <div className='card border-0 m-0 p-0'>
        { board && <BoardTitle title={board.title} setTitle={setTitle} /> }
        <div className='btn btn-light op-8 btn-square rounded darken-20 ml-1' onClick={onStarClick}>
          <i className={`fa-star ${board && board.starred ? 'fas text-warning' : 'far'}`}></i>
        </div>
        <div className='ml-1 d-i-b text-white'>
          { 
            board
            && !isSettingDesc
              && (board.describtion ? board.describtion : 'no describtion')
          }
        <input
          type='text'
          id='describtion-input'
          className={`m-0 rounded ${!isSettingDesc && 'd-n'}`}
          value={descText}
          onChange={onDescTextChange}
          onBlur={onSetDesc}
          onKeyUp={onKeyUp} />
        </div>
        <div className='btn btn-light op-8 darken-20 btn-square rounded ml-1' onClick={onDescClick}>
          <i className='fas fa-pen'></i>
        </div>
      </div>
    </div>
  )
}

export default BoardNavbar
