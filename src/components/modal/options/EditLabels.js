import React, { useContext } from 'react';

import EditLabelItem from './EditLabelItem';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const EditLabels = () => {
  const { currentBoardId, currentListId, currentCard, setCurrentCard, setOptionsModal, setOptionsModalStep } = useContext(UserContext);
  const { updateCard, labels, colors } = useContext(BoardContext);


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
        labels: currentCard.labels.filter(l => l !== id)
      }
    }

    updateCard(currentBoardId, currentListId, currentCard.id, newCard);
    setCurrentCard(newCard);
  }

  const setState = () => {
    setOptionsModalStep('on', 'editLabels');
    setOptionsModal('on', 'members');
  }

  return (
    <div>
      <input type='text' placeholder='search labels...' className='mt mb-1 text-85 p'/>
      <div className='text-85 mb'>
        Labels
      </div>
      {
        labels.map(l => (
          <EditLabelItem key={l.id} label={l} setState={setState} setLabelId={setLabel} currentCard={currentCard} />
        ))
      }
      <div className="btn btn-block mt-1">
        create new label
      </div>
    </div>
  )
}

export default EditLabels
