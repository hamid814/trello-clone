import React, { useState } from 'react';
import SearchResults from './SearchResults';

const SearchCards = () => {
  const [text, setText] = useState('');
  const [searching, setSearching] = useState(true)

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onClick = () => {
    setSearching(true);
  }

  const onBlur = () => {
    setSearching(false);
  }

  const thisStyle = {
    width: searching ? '155%' : '100%'
  }

  return (
    <div id='search-cards' className='pos-rel search-box-wrapper'>
      <input
        type='text'
        placeholder='seach cards'
        className={`m-0 border-0 rounded ${searching ? 'op-9' : 'op-7'}`}
        onChange={onChange}
        onClick={onClick}
        onBlur={onBlur}
        style={thisStyle}
        value={text}/>
      <div className={`search-result-panel rounded-lg ${!searching && 'd-n'}`}>
        <SearchResults text={text} />
      </div>
    </div>
  )
}

export default SearchCards