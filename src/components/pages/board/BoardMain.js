import React, { Fragment } from 'react';
import BoardList from './BoardList';

const BoardMain = ({ board, boardFuncs /* contains all of board context  */ }) => {
  return (
    <Fragment>
      { board &&
        board.lists.map(l => (
          <BoardList key={l.id} list={l} />
        )) }
    </Fragment>
  )
}

export default BoardMain
