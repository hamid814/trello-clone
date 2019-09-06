import React, { useContext } from 'react'

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const EditLabels = () => {
  const { currentBoardId, currentListId, currentCard, setModal, setOptionsModal } = useContext(UserContext);
  const { updateCard } = useContext(BoardContext);

  return (
    <div>
      search labels
      add labels
      create label
    </div>
  )
}

export default EditLabels
