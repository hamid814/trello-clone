import React, { useContext } from 'react';

import UserContext from '../../context/user/userContext';

const DetailsModal = () => {
  const userContext = useContext(UserContext);

  const { setModal, currentCard } = userContext;

  const onClose = () => {
    setModal('off');
  }

  return (
    <div className='details-modal-container'>
      <div className='details-modal-header'>
        <div className='close text-lg' onClick={onClose}>
          &times;
        </div>
        { currentCard.text }
      </div>
      <div className='details-modal-body'>

      </div>
    </div>
  )
}

export default DetailsModal
