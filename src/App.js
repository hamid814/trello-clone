import React, { Fragment, useContext } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/home/Home';
import Board from './components/pages/board/Board';

import UserContext from './context/user/userContext';

import './trello-clone.css';

const App = () => {
  const userContext = useContext(UserContext);

  const { currentBoardId } = userContext

  return (
    <Fragment>
      <Navbar />
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