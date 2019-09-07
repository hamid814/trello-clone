import React, { useContext } from 'react';

import EditLabelItem from './EditLabelItem';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const EditLabels = () => {
  const { currentBoardId, currentListId, currentCard, setCurrentCard } = useContext(UserContext);
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
      console.log('here')
      console.log(currentCard.labels)
      newCard = {
        ...currentCard,
        labels: currentCard.labels.filter(l => l !== id)
      }
    }

    updateCard(currentBoardId, currentListId, currentCard.id, newCard);
    setCurrentCard(newCard);
  }

  return (
    <div>
      <input type='text' placeholder='search labels...' className='mt mb-1'/>
      {
        labels.map(l => (
          <EditLabelItem key={l.id} label={l} setLabelId={setLabel} />
        ))
      }
      <div className="btn btn-block mt-1">
        create new label
      </div>
    </div>
  )
}

export default EditLabels
