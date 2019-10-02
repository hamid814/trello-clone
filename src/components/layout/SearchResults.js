import React, { useState, useEffect, useContext } from 'react';
import SearchResultItem from './SearchResultItem';

import boardContext from '../../context/board/boardContext';

const SearchResults = ({ text }) => {
  const [list, setList] = useState([]);

  const { boards } = useContext(boardContext);

  useEffect(() => {
    
  }, [text]);

  return (
    <div className='search-result'>
      hamid
    </div>
  )
}

export default SearchResults
