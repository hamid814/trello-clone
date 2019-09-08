import React, { useState, useEffect, useRef, useContext } from 'react';
import DeleteCard from './options/DeleteCard';
import EditCardLabels from './options/EditCardLabels';
import EditLabel from './options/EditLabel';
import ListActions from './options/ListActions';
import DeleteList from './options/DeleteList';

import UserContext from '../../context/user/userContext';

import './modals.css';

const OptionsModal = () => {
  const container = useRef(null);

  const userContext = useContext(UserContext);

  const {
    optionsModalStatus,
    optionsModalType,
    optionsModalStepStatus,
    optionsModalStepType,
    mousePos,
    setOptionsModal,
    setOptionsModalStep} = userContext;

  const [showModal, setShowModal] = useState('off');
  const [pos, setPos] = useState({});
  
  useEffect(() => {
    setShowModal(optionsModalStatus/* from useState */);
    setOptionsPos();
    // eslint-disable-next-line
  }, [optionsModalStatus, mousePos])

  const onClick = (e) => {
    if(e.target.id === 'options-modal') {
      closeModal();
    }
  }

  const onBack = () => {
    setOptionsModal('on', optionsModalStepType);
    setOptionsModalStep('off');
  }

  const closeModal = () => {
    setOptionsModal('off');
    setOptionsModalStep('off');
  }

  const setOptionsPos = () => {
    setTimeout(() => {
      if(mousePos) {
        let rect;
        rect = container.current.getBoundingClientRect();

        if(window.innerWidth - mousePos.x - 10 < rect.width && window.innerHeight - mousePos.y > rect.height) {
          setPos({
            right: 10,
            top: mousePos.y + 10 + 'px'
          });
        } else if(window.innerHeight - mousePos.y - 10 < rect.height && window.innerWidth - mousePos.x > rect.width) {
          setPos({
            left: mousePos.x + 10 + 'px',
            bottom: 10
          })
        } else if(window.innerHeight - mousePos.y - 10 < rect.height && window.innerWidth - mousePos.x - 10 < rect.width) {
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

  const modalDisplay = {
    display: showModal === 'on' ? 'block' : 'none'
  }

  return (
    <div 
      style={modalDisplay}
      id='options-modal'
      onClick={onClick}>
        <div ref={container} className='options-modal-container' style={pos}>
          <div className='options-modal-header'>
            {
              optionsModalStepStatus === 'on'
                && <div className='back d-i-b float-left cursor-p lighten-30 hover-darken' onClick={onBack}>
                      <i className='fas fa-angle-left'></i>
                    </div>
            }
            <div className="close" onClick={closeModal}>
              &times;
            </div>
            {
              optionsModalType === 'editCardLabels' && 'Labels'
            }
            {
              optionsModalType === 'editLabel' && 'Change Label'
            }
            {
              optionsModalType === 'move' && 'Move card'
            }
            {
              optionsModalType === 'members' && 'Members'
            }
            {
              optionsModalType === 'deleteCard' && 'Delete Card'
            }
            {
              optionsModalType === 'listActions' && 'List Actions'
            }
            {
              optionsModalType === 'deleteList' && 'Delete List'
            }
          </div>
          <div className='options-modal-body'>
            {
              optionsModalType === 'deleteCard' && <DeleteCard />
            }
            {
              optionsModalType === 'editCardLabels' && <EditCardLabels />
            }
            {
              optionsModalType === 'editLabel' && <EditLabel />
            }
            {
              optionsModalType === 'listActions' && <ListActions />
            }
            {
              optionsModalType === 'deleteList' && <DeleteList />
            }
          </div>
        </div>
    </div>
  )
}

export default OptionsModal
