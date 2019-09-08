import React, { useState, useEffect } from 'react';
import BoardList from './BoardList';
import AddList from './AddList';

const BoardMain = ({ board, boardFuncs /* contains all of board context  */ }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setScrollIflonger();
    // eslint-disable-next-line
  }, [board]);

  const setScrollIflonger = () => {
    const boardWidth = (board.lists.length + 1) * 270;

    if(16 + boardWidth > window.innerWidth) {
      setStyle({
        display: 'grid',
        gridTemplateRows: '1fr',
        gridTemplateColumns: `repeat(${board && board.lists.length + 1}, 1fr)`
      });
    }
  }

  return (
    <div className='trello-board-main' style={style}>
      { board.lists.map(l => (
          <div key={l.id} className='trello-board-list-wrapper'>
            <BoardList list={l} boardFuncs={boardFuncs} />
          </div>
        )) }
      <div className='trello-board-list-wrapper'>
        <AddList board={board} setScrollIflonger={setScrollIflonger} />
      </div>
    </div>
  )
}

export default BoardMain