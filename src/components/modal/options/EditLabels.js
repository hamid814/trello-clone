import React, { useContext } from 'react';

import LabelItem from './LabelItem';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const EditLabels = () => {
  const { currentBoardId, currentListId, currentCard, setModal, setOptionsModal } = useContext(UserContext);
  const { updateCard, labels } = useContext(BoardContext);


  const setLabel = (id) => {
    let newCard;
    if(currentCard.labels.indexOf(id) === -1) {
      // card hasnt this id / add the id
      newCard = {
        ...currentCard,
        labels: [...currentCard.labels, id]
      }
    } else {
      // card has this id / remove the id
      newCard = {
        ...currentCard,
        labels: currentCard.labels.filter(l => l.id !== id)
      }
    }

    updateCard(currentBoardId, currentListId, currentCard.id, newCard);
  }

  return (
    <div>
      <input type='text' placeholder='search labels...' className='mt mb-1'/>
      {
        labels.map(l => (
          <LabelItem key={l.id} label={l} setLabelId={setLabel} />
        ))
      }
      <div className="btn btn-block mt-1">
        create new label
      </div>
    </div>
  )
}

export default EditLabels
