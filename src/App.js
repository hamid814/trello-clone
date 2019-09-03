import React, { Fragment, useEffect, useContext } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/home/Home';
import Board from './components/pages/board/Board';

import Alerts from './components/alert/Alerts';

import UserContext from './context/user/userContext';

import './trello-clone.css';
import './trello-clone-keyframes.css';

const App = () => {
  const userContext = useContext(UserContext);

  const { setCurrentBoardId, currentBoardId } = userContext

  // to display board page for development purposes
  useEffect(() => {
    setCurrentBoardId(1);
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Alerts />
      { !currentBoardId
          ? <Home />
          : <Board />
      }
      {/* <Home /> */}
      {/* <Board /> */}
    </Fragment>
  );
}
export default App