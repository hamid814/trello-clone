import React, { useState, useContext } from 'react';

import UserContext from '../../../context/user/userContext';

const BoardTitle = ({ title, setTitle }) => {
  const userContext = useContext(UserContext);

  const { currentBoardId } = userContext;

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
      setIsSettingTitle(false);
    } else {
      setIsSettingTitle(false);
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
