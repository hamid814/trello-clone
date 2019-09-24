import React, { Fragment, useState, useEffect, useContext } from 'react';
import HomeMainItem from './HomeMainItem';

import BoardContext from '../../../context/board/boardContext';

const Starred = () => {
  const [list, setList] = useState([])

  const boardContext = useContext(BoardContext);

  const { boards, getBoard } = boardContext;

  useEffect(() => {
    const listInDev = []
    
    boards.forEach(b => {
      if(b.starred) {
        listInDev.push(b);
      }
    })

    console.log(listInDev)

    setList(listInDev)

    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      { list.length !== 0
        &&  <div className="card border-top-0 border-right-0 border-left-0 pb-2">
              <i className="fa fa-star mr-1"></i>
              favorite borads
              <div className="">
                { list.map(s => (
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
