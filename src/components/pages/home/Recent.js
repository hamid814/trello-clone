import React, { Fragment, useContext } from 'react';
import HomeMainItem from './HomeMainItem';

import BoardContext from '../../../context/board/boardContext';

const Recent = () => {
  const boardContext = useContext(BoardContext);

  const { getRecentBoards } = boardContext;

  return (
    <Fragment>
      { getRecentBoards().length !== 0
        &&  <div className="card border-top-0 border-right-0 border-left-0 pb-2">
              <i className="fa fa-clock mr-1"></i>
              Recent borads
              <div className="">
                { getRecentBoards().map(r => (
                      <HomeMainItem key={r.id} board={r} />
                    ))
                }
              </div>
            </div>
      }
    </Fragment>
  )
}

export default Recent
