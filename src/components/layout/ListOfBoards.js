import React, { useRef, useContext } from 'react';

import userContext from '../../context/user/userContext';

const ListOfBoards = () => {
  const list = useRef(null);

  const { showBoards,keepBoards, toggleKeepBoards, toggleShowBoards } = useContext(userContext);

  const onKeepClicked = () => {
    toggleKeepBoards();
  }

  list.current && console.log(list.current.classList)

  return (
    <div ref={list} className={`list-of-boards ${showBoards ? 'show' : ''} ${keepBoards ? 'keep' : ''}`}>
      my list <br />
      <span onClick={onKeepClicked}>always keep this menu open</span><br />
      show boards: { showBoards ? 'true' : 'false' } <br />
      keep boards: { keepBoards ? 'true' : 'false' }
    </div>
  )
}

export default ListOfBoards
