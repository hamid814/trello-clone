import React, { useState, useEffect, useContext } from 'react';
import AddBoardModal from './AddBoardModal';
import DetailsModal from './DetailsModal';
import FastEditModal from './FastEditModal';
import OptionsModal from './OptionsModal';

import UserContext from '../../context/user/userContext';

const Modal = () => {
  const userContext = useContext(UserContext);

  const { modalStatus, modalType, setModal } = userContext;

  const [showModal, setShowModal] = useState('off');
  
  useEffect(() => {
    setShowModal(modalStatus/* from useState */);
    // for development purposes
    // setModal('on', 'addBoardModal');
    // eslint-disable-next-line
  }, [modalStatus])

  const onClick = (e) => {
    if(e.target.classList.contains('modal')) {
      closeModal();
    }
  }

  const closeModal = () => {
    setModal('off');
  }

  const modalDisplay = {
    display: showModal === 'on' ? 'block' : 'none'
  }

  return (
    <div 
      style={modalDisplay}
      className='modal'
      onClick={onClick}>
      {
        modalType === 'addBoardModal' && <AddBoardModal />
      }
      {
        modalType === 'detailsModal' && <DetailsModal />
      }
      {
        modalType === 'fastEditModal' && <FastEditModal />
      }
      {
        modalType === 'optionsModal' && <OptionsModal />
      }
      
    </div>
  )
}

export default Modal
