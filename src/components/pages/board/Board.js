import React, { Fragment, useContext } from 'react';
import BoardNavbar from './BoardNavbar';
import BoardMain from './BoardMain';

// context
import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

// css
import './board.css';

const Board = () => {
  const { currentBoardId } = useContext(UserContext);
  const boardContext = useContext(BoardContext);

  const { getBoard, setStar, setDescribtion } = boardContext;

  const boardStyle = {
    background: getBoard(currentBoardId).color
  }

  return (
    <Fragment>
      <BoardNavbar
        board={getBoard(currentBoardId)}
        setStar={setStar}
        setDescribtion={setDescribtion} />
      <div className='trello-board-main-wrapper lighten-20 p' style={boardStyle}>
        <BoardMain boardFuncs={boardContext} board={getBoard(currentBoardId)} />
      </div>
    </Fragment>
  )
}

export default Board
