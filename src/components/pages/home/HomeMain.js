import React, { useContext } from 'react';
import Recent from './Recent';
import Pinned from './Pinned';

import BoardContext from '../../../context/board/boardContext';

const HomeMain = () => {
  const { boards } = useContext(BoardContext);

  return (
    <div>
      <div className="card border-top-0 border-right-0 border-left-0">
        <Recent />
      </div>
      <div className="card border-0">
        <Pinned />
      </div>
    </div>
  )
}

export default HomeMain
