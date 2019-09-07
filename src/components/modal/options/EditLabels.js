import React, { useContext } from 'react';

import LabelItem from './LabelItem';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const EditLabels = () => {
  const { currentBoardId, currentListId, currentCard, setModal, setOptionsModal } = useContext(UserContext);
  const { updateCard, labels } = useContext(BoardContext);

  return (
    <div>
      <input type='text' placeholder='search labels...' className='mt mb'/>
      {
        labels.map(l => (
          <LabelItem key={l.id} label={l} />
        ))
      }
      <div className="btn btn-block mt">
        create new label
      </div>
    </div>
  )
}

export default EditLabels
