import React, { Fragment, useState, useEffect, useContext } from 'react';
import BoardNavbar from './BoardNavbar';
import BoardMain from './BoardMain';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const Board = () => {
  const [board, setBoard] = useState(null);

  const userContext = useContext(UserContext);
  const boardContext = useContext(BoardContext);

  const { currentBoardId } = userContext;
  const { getBoard } = boardContext;

  useEffect(() => {
    setBoard(getBoard(1)[0]);
  }, []);

  return (
    <Fragment>
      <div className="trello-board-container">
        <div className="trello-board-row trello-board-row-1">
          <BoardNavbar board={board} />
        </div>
        <div className="trello-board-row trello-board-row-2">
          <BoardMain />
        </div>
      </div>
    </Fragment>
  )
}

export default Board
