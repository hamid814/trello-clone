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
    console.log('foocus on inputs')
    console.log('change all e.target to useRef because e.target doesnt work on touch events')
    console.log('change word item to card in context and stuff')
    console.log('setState in LabelItem in options')
    console.log('copy card')
    console.log('sort the list actions ( put them in [dasteh] )')
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