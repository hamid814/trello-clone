import React, { useContext } from 'react';

import UserContext from '../../context/user/userContext';

const AddBoard = () => {
  const userContext = useContext(UserContext);

  console.log(userContext);

  return (
    <div>
      add Board
    </div>
  )
}

export default AddBoard
