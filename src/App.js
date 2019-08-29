import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/home/Home';
import Board from './components/pages/board/Board';

import './trello-clone.css';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Board />
    </Fragment>
  );
}
export default App