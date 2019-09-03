import React, { useState, useEffect, useContext } from 'react';
import AddBoardModal from './AddBoardModal';
import DetailsModal from './DetailsModal';
import FastEditModal from './FastEditModal';
import OptionsModal from './OptionsModal';

import UserContext from '../../context/user/userContext';

const Modal = () => {
  const userContext = useContext(UserContext);

  const { modalStatus, modalType, setModalStatus } = userContext;

  const [showModal, setShowModal] = useState('off');
  
  useEffect(() => {
    setShowModal(modalStatus /* from useState */);
  }, [modalStatus])

  const onClick = (e) => {
    if(e.target.classList.contains('modal')) {
      closeModal();
    }
  }

  const closeModal = () => {
    setModalStatus('off');
  }

  const modalDisplay = {
    display: showModal === 'on' ? 'block' : 'none'
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
