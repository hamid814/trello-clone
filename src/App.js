import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/home/Home';

import './trello-clone.css';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
    </Fragment>
  );
}
export default App