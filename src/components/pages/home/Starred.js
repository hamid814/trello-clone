import React, { Fragment, useContext } from 'react';
import HomeMainItem from './HomeMainItem';

import BoardContext from '../../../context/board/boardContext';

const Starred = () => {
  const boardContext = useContext(BoardContext);

  const { getBoard, listOfStarredBoardsIds } = boardContext;

  return (
    <Fragment>
      { listOfStarredBoardsIds.length !== 0
        &&  <div className="card border-top-0 border-right-0 border-left-0 pb-2">
              <i className="fa fa-star mr-1"></i>
              favorite borads
              <div className="">
                { listOfStarredBoardsIds.map(s => (
                      <HomeMainItem key={s} board={getBoard(s)} />
                    ))
                }
              </div>
            </div>
      }
    </Fragment>
  )
}

export default Starred
