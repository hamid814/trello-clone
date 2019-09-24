import React, { useEffect, useContext } from 'react';
import Navbar from './components/layout/Navbar';
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
    setCurrentBoardId,
    currentBoardId,
    setMousePos,
    bigLabels,
    optionsModalStatus } = useContext(userContext);

  const { boards, labels, getData } = useContext(boardContext)

  // to display board page for development purposes
  useEffect(() => {
    setCurrentBoardId('b1');
    // console.log('focus on inputs')
    // console.log('setScrollIfLonger if board copied')
    // console.log('newCardActions in boardList does nothing yet ( add card must be editted to send an object to the context not a text )')
    // console.log('in final deploy, must change the add functions, ex. => i have prop on cards, but in addCard func, there is no "whatchin: false" so it must be changed as the other, add label (probalbely not), addList, add Board, and ...')
    // console.log('add members to details modal next to labels')
    // console.log('style checkboxes')
    // console.log('NewCardOptions to be done (its half done)')
    console.log('notes ↑')
    getData();
    // eslint-disable-next-line
  }, []);

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

  return (
    <>
    <div onClick={onClick} id='all-wrapper'>
      <Navbar />
      <Modal />
      <OptionsModal />
      <Alerts />
      { !currentBoardId
          ? <Home />
          : <Board />
      }
      {/* <Home /> */}
      {/* <Board /> */}
    </div>
    </>
  );
}
export default App