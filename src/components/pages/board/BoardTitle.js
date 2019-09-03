import React, { useState, useContext } from 'react';

import UserContext from '../../../context/user/userContext';
import AlertContext from '../../../context/alert/alertContext';

const BoardTitle = ({ title, setTitle }) => {
  const userContext = useContext(UserContext);
  const alertContext = useContext(AlertContext);

  const { currentBoardId } = userContext;
  const { setAlert } = alertContext;

  const [text, setText] = useState('');
  const [isSettingTitle, setIsSettingTitle] = useState(false);

  const onClick = () => {
    setIsSettingTitle(true);
    setText(title);
    console.log('text filed must be filled with title')
  }

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onBlur = () => {
    if(text !== '') {
      setTitle(text, currentBoardId);
      setAlert('board title changed', 'success');
      setIsSettingTitle(false);
    } else {
      setIsSettingTitle(false);
      setAlert('board title can not be empty', 'danger');
    }
  }

  const onKeyUp = (e) => {
    if(e.keyCode === 13) {
      onBlur();
    }
  }

  return (
    <div className="d-i-b">
      <div
        className={`text-white m-0 ml-1 ${isSettingTitle && 'd-n'}`}
        onClick={onClick}>
        { title }
      </div>
      <input
        type="text"
        className={`m-0 rounded ${!isSettingTitle && 'd-n'}`}
        onChange={onChange}
        onBlur={onBlur}
        onKeyUp={onKeyUp}/>
    </div>
  )
}

export default BoardTitle
