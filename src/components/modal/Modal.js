import React, { useState, useEffect, useContext } from 'react';
import AddBoardModal from './AddBoardModal';
import DetailsModal from './DetailsModal';
import FastEditModal from './FastEditModal';
import OptionsModal from './OptionsModal';

import UserContext from '../../context/user/userContext';

const Modal = () => {
  const userContext = useContext(UserContext);

  const { modalIsOn, modalType } = userContext;

  const [modalOn, setModalOn] = useState(true);
  
  useEffect(() => {
    // setModalOn(ModalIsOn /* from useState */);
  }, [])

  const onClick = (e) => {
    if(e.target.classList.contains('modal')) {
      closeModal();
    }
  }

  const closeModal = () => {
    setModalOn(false);
  }

  const modalDisplay = {
    display: modalOn ? 'block' : 'none'
  }

  return (
    <div 
      style={modalDisplay}
      className='modal'
      onClick={onClick}>
      
    </div>
  )
}

export default Modal
