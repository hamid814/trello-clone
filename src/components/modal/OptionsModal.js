import React, { useState, useEffect, useRef, useContext } from 'react';

import UserContext from '../../context/user/userContext';

import './modals.css';

const OptionsModal = () => {
  const container = useRef(null);

  const userContext = useContext(UserContext);

  const {
    optionsModalStatus,
    optionsModalType,
    mousePos,
    setOptionsModal} = userContext;

  const [showModal, setShowModal] = useState('off');
  
  useEffect(() => {
    setShowModal(optionsModalStatus/* from useState */);
    setTimeout(() => {
      console.log(container.current ? container.current.getBoundingClientRect() : null)
    }, 0);
    // eslint-disable-next-line
  }, [optionsModalStatus])

  const onClick = (e) => {
    if(e.target.id === 'options-modal') {
      closeModal();
    }
  }

  const closeModal = () => {
    setOptionsModal('off');
  }

  const modalDisplay = {
    display: showModal === 'on' ? 'block' : 'none'
  }

  const optionsPos = mousePos && {
    left: mousePos.x + 10 + 'px',
    top: mousePos.y + 10 + 'px'
  }

  return (
    <div 
      style={modalDisplay}
      id='options-modal'
      onClick={onClick}>
        <div ref={container} className='options-modal-container' style={optionsPos}>
          <div className='options-modal-header'>
            <div className="close" onClick={closeModal}>
              &times;
            </div>
            {
              optionsModalType === 'label' && 'Labels'
            }
            {
              optionsModalType === 'move' && 'Move card'
            }
            {
              optionsModalType === 'members' && 'Members'
            }
            {
              optionsModalType === 'delete' && 'Delete card'
            }
          </div>
          <div className='options-modal-body'>
            {optionsModalType}
          </div>
        </div>
    </div>
  )
}

export default OptionsModal
