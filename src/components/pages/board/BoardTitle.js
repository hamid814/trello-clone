import React, { useState } from 'react'

const BoardTitle = ({ title, setTitle }) => {
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
      setTitle(text, 1);
      setIsSettingTitle(false);
    } else {
      setIsSettingTitle(false);
    }
    console.log('id must be setted ( from user State )')
  }

  const onKeyUp = (e) => {
    if(e.keyCode === 13) {
      onBlur();
    }
  }

  return (
    <div className="d-i-b">
      <div
        className={`btn btn-primary btn-narrow m-0 ${isSettingTitle && 'd-n'}`}
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
