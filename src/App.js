import React, { useEffect, useContext } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/home/Home';
import Board from './components/pages/board/Board';
import Modal from './components/modal/Modal';
import OptionsModal from './components/modal/OptionsModal';
import Alerts from './components/alert/Alerts';

import UserContext from './context/user/userContext';

import './trello-clone.css';
import './trello-clone-keyframes.css';

const App = () => {
  const userContext = useContext(UserContext);

  const {
    setCurrentBoardId,
    currentBoardId,
    setMousePos,
    optionsModalStatus } = userContext

  // to display board page for development purposes
  useEffect(() => {
    setCurrentBoardId(1);
    console.log('focus on inputs')
    console.log('change the word "item" to card in context and stuff')
    console.log('sort the list actions ( put them in [dasteh] )')
    console.log('setScrollIfLonger if board copied')
    // eslint-disable-next-line
  }, []);

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