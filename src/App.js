import React, { useEffect, useContext } from 'react';
import Navbar from './components/layout/Navbar';
import ListOfBoards from './components/layout/ListOfBoards';
import Home from './components/pages/home/Home';
import Board from './components/pages/board/Board';
import Modal from './components/modal/Modal';
import OptionsModal from './components/modal/OptionsModal';
import Alerts from './components/alert/Alerts';

import userContext from './context/user/userContext';
import boardContext from './context/board/boardContext';

import './trello-clone.css';

const App = () => {
  const {
    currentBoardId,
    setMousePos,
    bigLabels,
    getUserdata,
    keepBoardsList,
    showBoardsList,
    toggleShowBoardsList,
    optionsModalStatus } = useContext(userContext);

  const { boards, labels, getBoardsData } = useContext(boardContext)

  // to display board page for development purposes
  useEffect(() => {
    // focus on inputs
    // style checkboxes
    // save keepBoardsList to local storage
    // add demo btn
    console.log('notes ↑')
    // eslint-disable-next-line
  }, []);
  
  useEffect(() => {
    getBoardsData()
    getUserdata()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const stiringed = JSON.stringify(boards)
    
    localStorage.setItem('boards', stiringed);
  }, [boards]);

  useEffect(() => {
    const stiringed = JSON.stringify(labels)
    
    localStorage.setItem('labels', stiringed);
  }, [labels]);

  useEffect(() => {
    const stiringed = JSON.stringify(bigLabels)
    
    localStorage.setItem('bigLabels', stiringed);
  }, [bigLabels]);

  const onClick = (e) => {
    if(optionsModalStatus === 'off') {
      setMousePos(e.clientX, e.clientY)
    }
  }

  const CloseListOfBoards = (e) => {
    if(!keepBoardsList) {
      if(showBoardsList) {
        toggleShowBoardsList();
      }
    }
  }

  return (
    <>
    <div onClick={onClick} className='all-wrapper'>
      <Modal />
      <OptionsModal />
      <Alerts />
      <div className={`all-wrapper ${keepBoardsList ? 'grid-1-4 gap-none' : ''}`}>
        <div className='all-wrapper'>
          <ListOfBoards />
        </div>
        <div className='all-wrapper' onClick={CloseListOfBoards}>
          <Navbar />
          { !currentBoardId
              ? <Home />
              : <Board />
          }
        </div>
      </div>
    </div>
    </>
  );
}
export default App