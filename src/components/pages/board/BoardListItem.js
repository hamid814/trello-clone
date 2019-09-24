import React, { useRef, useContext } from 'react';
import ListItemLabels from './ListItemLabels';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const BoardListItem = ({ item, listId }) => {
  const listItem = useRef(null);

  const { currentBoardId, setCurrentCard, setModal, setFastEditModalPos, toggleBigLabels, bigLabels, setData, data } = useContext(UserContext);
  const { getList, moveCard } = useContext(BoardContext);

  const onClick = (e) => {
    if(!e.target.classList.contains('func-e-btn') && !e.target.parentElement.classList.contains('func-e-btn') && !e.target.classList.contains('func-card-label') && !e.target.classList.contains('func-label-text')) {
      setModal('on', 'detailsModal');
    }
    setCurrentCard(item);
  }

  const onDragStart = (e) => {
    const thisE = e.target;
    setTimeout(() => {
      thisE.classList.add('dragging')
    }, 0);
  }

  const onDragOver = e => {
    e.preventDefault();
  }

  const onDragEnd = (e) => {
    e.target.classList.remove('dragging')

    if(data) {
      const destCardIndex = getList(currentBoardId, data.destListId).items.findIndex(i => i.id === data.destItemId)

      moveCard(currentBoardId, listId, item.id, currentBoardId, data.destListId, destCardIndex, item);

      setData(null)
    }
  }

  const onDrop = e=> {
    let elem;
    if(e.target.classList.contains('func-item')) {
      elem = e.target
    }
    if(e.target.parentElement.classList.contains('func-item')) {
      elem = e.target.parentElement
    }
    if(e.target.parentElement.parentElement.classList.contains('func-item')) {
      elem = e.target.parentElement.parentElement
    }
    if(e.target.parentElement.parentElement.parentElement.classList.contains('func-item')) {
      elem = e.target.parentElement.parentElement.parentElement
    }

    const destListId = elem.firstElementChild.innerText;

    setData({
      destItemId: item.id,
      destListId,
      correctDrop: true
    });
  }

  const onEBtnClick = (e) => {
    setFastEditModalPos({
        top: listItem.current.getBoundingClientRect().top,
        left: listItem.current.getBoundingClientRect().left,
        width: listItem.current.getBoundingClientRect().width
      });
    setModal('on', 'fastEditModal');
  }

  const getNumberOfChecklistItems = () => {
    let num = 0;
    item.checklists.forEach(c => {
      c.items.forEach(i => {
        num++
      })
    })

    return num
  }

  const getNumberOfDoneChecklistItems = () => {
    let num = 0;
    item.checklists.forEach(c => {
      c.items.forEach(i => {
        i.done && num++
      })
    })

    return num
  }

  return (
    <div
      className='func-item trello-board-list-item'
      draggable='true'
      ref={listItem}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onDrop={onDrop}
      onClick={onClick}>
        {/* this element  has to be the exact first child of func-item */}
        <div className='d-n'>{listId}</div>
        <div className='drag-board'></div>
        <ListItemLabels father='boardListItem' labels={item.labels} bigLabels={bigLabels} toggleBigLabels={toggleBigLabels} />
        <div>
          { item.text }
        </div>
        <div className='text-sm mt'>
          {
            item.desc &&
              <i className='fas fa-align-left mr'></i>
          }
          {
            item.watching &&
              <i className='fas fa-eye mr'></i>
          }
          {
            item.checklists.length > 0 &&
              getNumberOfChecklistItems() !== 0 &&
                <div className={`checklist-btn ${getNumberOfDoneChecklistItems() === getNumberOfChecklistItems() && getNumberOfChecklistItems() !== 0 ? 'btn-success' : 'btn-dark'}`}>
                  <i className='fas fa-check-square'></i>
                  {
                    getNumberOfDoneChecklistItems()
                  }
                  /
                  {
                    getNumberOfChecklistItems()
                  }
                </div>
          }
        </div>
        <div className='func-e-btn trello-board-list-item-edit-btn' onClick={onEBtnClick}>
          <i className='fas fa-pen'></i>
        </div>
    </div>
  )
}

export default BoardListItem
