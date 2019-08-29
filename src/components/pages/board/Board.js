import React, { Fragment, useState, useEffect, useContext } from 'react';
import BoardNavbar from './BoardNavbar';
import BoardMain from './BoardMain';

// context
import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

// css
import './board.css';

const Board = () => {
  const [board, setBoard] = useState(null);

  const userContext = useContext(UserContext);
  const boardContext = useContext(BoardContext);

  const { currentBoardId } = userContext;
  const { getBoard, setStar } = boardContext;

  useEffect(() => {
    setBoard(getBoard(1)[0]);
  }, []);

  return (
    <Fragment>
      <div className="trello-board-row trello-board-row-1">
        <BoardNavbar board={board} setStar={setStar} />
      </div>
      <div className="trello-board-main bg-primary lighten-20 p">
        <BoardMain boardFuncs={boardContext} board={board} />
      </div>
    </Fragment>
  )
}

export default Board
