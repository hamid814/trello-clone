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
    // newCardActions in boardList does nothing yet ( add card must be editted to send an object to the context not a text )
    // in final deploy, must change the add functions, ex. => i have prop on cards, but in addCard func, there is no "whatchin: false" so it must be changed as the other, add label (probalbely not), addList, add Board, and ...
    // add members to details modal next to labels
    // style checkboxes
    // NewCardOptions to be done (its half done)
    // clear all boards to boards list in the navbar
    // search result scroll if longer
    // cahnge board color
    // save keepBoardsList to local storage
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