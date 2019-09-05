import React, { useEffect, useContext } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/home/Home';
import Board from './components/pages/board/Board';
import Modal from './components/modal/Modal';
import Alerts from './components/alert/Alerts';

import UserContext from './context/user/userContext';

import './trello-clone.css';
import './trello-clone-keyframes.css';

const App = () => {
  const userContext = useContext(UserContext);

  const { setCurrentBoardId, currentBoardId, setMousePos } = userContext

  // to display board page for development purposes
  useEffect(() => {
    setCurrentBoardId(1);
    // eslint-disable-next-line
  }, []);

  const onClick = (e) => {
    setMousePos(e.clientX, e.clientY)
  }

  return (
    <div onClick={onClick}>
      <Navbar />
      <Modal />
      <Alerts />
      { !currentBoardId
          ? <Home />
          : <Board />
      }
      {/* <Home /> */}
      {/* <Board /> */}
    </div>
  );
}
export default App