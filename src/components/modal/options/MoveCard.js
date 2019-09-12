import React, { useState, useEffect, useRef, useContext } from 'react';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const MoveCard = () => {
  const boardsSelect = useRef(null);
  const listSelect = useRef(null);
  const posSelect = useRef(null);
  
  const [destBoardId, setDestBoardId] = useState('');
  const [destListId, setDestListId] = useState('');
  const [desPos, setDestPos] = useState(0);

  const { currentBoardId, currentListId, currentCard } = useContext(UserContext);
  const { boards, getBoard, getList, moveCard } = useContext(BoardContext);

  useEffect(() => {
    setDestBoardId(currentBoardId);
    setDestListId(currentListId);
    setDestPos(getList(currentBoardId, currentListId).items.findIndex(i => i.id === currentCard.id) + 1);
    // boardsSelect.current.value = currentBoardId;
    // listSelect.current.value = currentListId;
    // posSelect.current.value = getList(currentBoardId, currentListId).items;
    // eslint-disable-next-line
  }, [currentBoardId, currentListId]);

  const onBoardDestChange = (e) => {
    setDestBoardId(e.target.value);
  }

  const onListDestChange = (e) => {
    setDestListId(e.target.value);
  }

  const onPosDestChange = (e) => {
    setDestPos(Number(e.target.value) - 1);
  }

  const onMove = () => {
    // moveCard();
  }

  return (
    <div className='move-card-modal text-85'>
      {/* board select */}
      <section>
        <div className="p">
          board
        </div>
        <select ref={boardsSelect} value={destBoardId} onChange={onBoardDestChange} className='mb'>
          {
            boards.map(board => (
              <option key={board.id} value={board.id}>{ board.title }{ board.id === currentBoardId && ' (current)' }</option>
            ))
          }
        </select>
      </section>
      {/* list select */}
      <section>
        <div className="p">
          list
        </div>
        <select ref={listSelect} value={destListId} onChange={onListDestChange} className='mb'>
          {
            destBoardId && getBoard(destBoardId).lists.map((list, index) => (
              <option key={list.id} value={list.id}>{ list.title }{ list.id === currentListId && '(current)' }</option>
            ))
          }
        </select>
      </section>
      {/* posotion select */}
      <section>
        <div className="p">
          position
        </div>
        <select ref={posSelect} value={desPos} onChange={onPosDestChange} className='mb'>
          {
            destBoardId
              && destListId
                && getList(destBoardId, destListId).items.map((item, index) => (
                    <option key={item.id} value={index + 1}>{ index + 1 }{ item.id === currentCard.id && ' (current)' }</option>
                  ))
          }
          {
            destBoardId
            && destListId
            && (destListId !== currentListId)
            &&  <option value={getList(destBoardId, destListId).items.length + 1}>{ getList         (destBoardId, destListId).items.length + 1 }</option>
          }
          {/* {
            destBoardId && getBoard(destBoardId).lists.map((list, index) => (
              <option key={list.id} value={index + 1}>{ index + 1 }{ list.id === currentListId && ' (current)' }</option>
            ))
          }
          {
            destBoardId
              && (destBoardId !== currentBoardId)
              && <option value={getBoard(destBoardId).lists.length + 1}>{ getBoard(destBoardId).lists.length + 1 }</option>
          } */}
        </select>
      </section>
      <div className='btn btn-success' onClick={onMove}>
        Move
      </div>
    </div>
  )
}

export default MoveCard
