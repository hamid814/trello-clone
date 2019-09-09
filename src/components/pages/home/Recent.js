import React, { Fragment, useContext } from 'react';
import uniqid from 'uniqid';
import HomeMainItem from './HomeMainItem';

import BoardContext from '../../../context/board/boardContext';
import UserContext from '../../../context/user/userContext';

const Recent = () => {
  const boardContext = useContext(BoardContext);
  const userContext = useContext(UserContext);

  const { getRecentBoards } = boardContext;
  const { recentIds } = userContext;

  return (
    <Fragment>
      { getRecentBoards(recentIds).length !== 0
        &&  <div className="card border-top-0 border-right-0 border-left-0 pb-2">
              <i className="fa fa-clock mr-1"></i>
              Recent borads
              <div className="">
                { getRecentBoards(recentIds).map(r => (
                      <HomeMainItem key={uniqid()} board={r} />
                    ))
                }
              </div>
            </div>
      }
    </Fragment>
  )
}

export default Recent
