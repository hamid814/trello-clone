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
  const [pos, setPos] = useState({});
  
  useEffect(() => {
    setShowModal(optionsModalStatus/* from useState */);
    setTimeout(() => {
      // console.log(container.current ? container.current.getBoundingClientRect() : null)
    }, 0);
    setOptionsPos();
    // eslint-disable-next-line
  }, [optionsModalStatus, mousePos])

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

  const setOptionsPos = () => {
    setTimeout(() => {
      if(mousePos) {
        let rect;
        rect = container.current.getBoundingClientRect();

        if(window.innerWidth - mousePos.x < rect.width && window.innerHeight - mousePos.y > rect.height) {
          setPos({
            right: 10,
            top: mousePos.y + 10 + 'px'
          });
        } else if(window.innerHeight - mousePos.y < rect.height && window.innerWidth - mousePos.x > rect.width) {
          setPos({
            left: mousePos.x + 10 + 'px',
            bottom: 10
          })
        } else if(window.innerHeight - mousePos.y < rect.height && window.innerWidth - mousePos.x < rect.width) {
            setPos({
            right: 10,
            bottom: 10
          })
        } else {
          setPos({
            left: mousePos.x + 10 + 'px',
            top: mousePos.y + 10 + 'px'
          })
        }
      }
    }, 0);
  }

  return (
    <div 
      style={modalDisplay}
      id='options-modal'
      onClick={onClick}>
        <div ref={container} className='options-modal-container' style={pos}>
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
            {
              optionsModalType === 'listActions' && 'List Actions'
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
