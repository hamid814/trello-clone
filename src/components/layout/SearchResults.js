import React, { useContext } from 'react';

import boardContext from '../../context/board/boardContext';

const SearchResults = ({ text }) => {
  const { boards } = useContext(boardContext);

  return (
    <div calssName='search-result'>
      {text ? text : 'hamid'}<br />
      {text ? text : 'hamid'}<br />
      {text ? text : 'hamid'}<br />
      {text ? text : 'hamid'}<br />
      {text ? text : 'hamid'}<br />
    </div>
  )
}

export default SearchResults
