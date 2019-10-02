import React, { useState, useEffect, useRef, useContext } from 'react';
import SearchResults from './SearchResults';

import userContext from '../../context/user/userContext'

const SearchCards = () => {
  const { currentBoardId } = useContext(userContext);

  const input = useRef(null)

  const [text, setText] = useState('');
  const [searching, setSearching] = useState(false)

  useEffect(() => {
    setSearching(false);
  }, [currentBoardId]);

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onClick = () => {
    setSearching(true);
  }

  const onBlur = () => {
    // setSearching(false);
    // setText('');
  }

  const thisStyle = {
    width: searching ? '155%' : '100%'
  }

  const thisStyle1 = {
    top: input.current && input.current.getBoundingClientRect().height + 5
  }

  return (
    <div id='search-cards' className='pos-rel search-box-wrapper'>
      <input
        type='text'
        placeholder='seach cards'
        ref={input}
        className={`m-0 border-0 rounded ${searching ? 'op-9' : 'op-7'}`}
        onChange={onChange}
        onClick={onClick}
        onBlur={onBlur}
        style={thisStyle}
        value={text}/>
      <div style={thisStyle1} className={`search-result-panel rounded-lg ${!searching && 'd-n'}`}>
        <SearchResults text={text} />
      </div>
    </div>
  )
}

export default SearchCards