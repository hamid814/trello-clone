import React, { useState, useEffect, useRef, useContext } from 'react';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const MoveList = () => {
  const boardsSelect = useRef(null);
  const PosSelect = useRef(null);
  
  const [destBoardId, setDestBoardId] = useState(null);
  const [desPos, setDestPos] = useState(null);
  const [changed, setChanged] = useState(false);

  const { currentBoardId, currentListId, setOptionsModal } = useContext(UserContext);
  const { boards, getBoard, moveList } = useContext(BoardContext);

  useEffect(() => {
    setDestBoardId(currentBoardId);
    setDestPos(getBoard(currentBoardId).lists.findIndex(l => l.id === currentListId));
    boardsSelect.current.value = currentBoardId;
  }, [currentBoardId, currentListId]);

  const onBoardDestChange = (e) => {
    setChanged(true);
    setDestBoardId(e.target.value);
  }

  const onListDestChange = (e) => {
    setChanged(true);
    setDestPos(Number(e.target.value) - 1);
  }

  const onMove = () => {
    const indexOfList = getBoard(currentBoardId).lists.findIndex(l => l.id === currentListId);

    if(changed) {
      moveList(currentBoardId, indexOfList, destBoardId, desPos);
    }
    
    setOptionsModal('off');
  }

  return (
    <div className='text-85'>
      <div className="p">
        board
      </div>
      <select ref={boardsSelect} onChange={onBoardDestChange} className='mb'>
        {
          boards.map(board => (
            <option key={board.id} value={board.id}>{ board.title }{ board.id === currentBoardId && '(current)' }</option>
          ))
        }
      </select>
      <div className="p">
        position
      </div>
      <select ref={PosSelect} onChange={onListDestChange} className='mb'>
        {
          destBoardId && getBoard(destBoardId).lists.map((list, index) => (
            <option key={list.id} value={index + 1}>{ index + 1 }{ list.id === currentListId && '(current)' }</option>
          ))
        }
      </select>
      <div className='btn btn-success' onClick={onMove}>
        Move
      </div>
    </div>
  )
}

export default MoveList
