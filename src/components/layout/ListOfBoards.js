import React, { useContext } from 'react';

import userContext from '../../context/user/userContext';

const ListOfBoards = () => {
  const { showBoardsList,keepBoardsList, toggleKeepBoardsList, toggleShowBoardsList } = useContext(userContext);

  const onKeepClicked = () => {
    toggleKeepBoardsList();
  }

  const thisStyle = {
    top: keepBoardsList ? 0 : 40
  }

  return (
    <div style={thisStyle} className={`list-of-boards ${showBoardsList ? 'show' : ''} ${keepBoardsList ? 'keep' : ''}`}>
      my list <br />
      <span onClick={onKeepClicked}>always keep this menu open</span><br />
      show boards List: { showBoardsList ? 'true' : 'false' } <br />
      keep boards List: { keepBoardsList ? 'true' : 'false' }
    </div>
  )
}

export default ListOfBoards
