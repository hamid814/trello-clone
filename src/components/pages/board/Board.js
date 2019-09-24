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

  const { currentBoardId } = useContext(UserContext);
  const boardContext = useContext(BoardContext);

  const { getBoard, setStar, setDescribtion, setTitle } = boardContext;

  useEffect(() => {
    setBoard(getBoard(currentBoardId));
    // eslint-disable-next-line
  }, [currentBoardId]);

  const boardStyle = {
    background: board && board.color
  }

  return (
    <Fragment>
      <BoardNavbar
        board={board}
        setStar={setStar}
        setDescribtion={setDescribtion}
        setTitle={setTitle} />
      <div className='trello-board-main-wrapper lighten-20 p' style={boardStyle}>
        {board && <BoardMain boardFuncs={boardContext} board={board} />}
      </div>
    </Fragment>
  )
}

export default Board
