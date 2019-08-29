import React, { useContext } from 'react';

import BoardContext from '../../../context/board/boardContext';

const HomeSideList = () => {
  const boardContext = useContext(BoardContext);

  const { boards } = boardContext;

  console.log(boards);

  return (
    <aside className="border-bottom border-dark">
      <button className="btn btn-block btn-primary text-left">
        <i className="fa fa-notes-medical mr-1"></i>
        <div className="text-bold d-i-b">Boards</div>
      </button>
    </aside>
  )
}

export default HomeSideList
