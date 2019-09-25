import React, { useContext } from 'react';

import userContext from '../../context/user/userContext';

const ListOfBoards = () => {
  const { showBoards,keepBoards, toggleKeepBoards, toggleShowBoards } = useContext(userContext);

  return (
    <div>
      my list
    </div>
  )
}

export default ListOfBoards
