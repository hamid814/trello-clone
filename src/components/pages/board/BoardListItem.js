import React, { useRef, useContext } from 'react';
import ListItemLabels from './ListItemLabels';

import UserContext from '../../../context/user/userContext';

const BoardListItem = ({ item }) => {
  const listItem = useRef(null);

  const { setCurrentCard, setModal, setFastEditModalPos, toggleBigLabels, bigLabels } = useContext(UserContext);

  const onClick = (e) => {
    if(!e.target.classList.contains('func-e-btn') && !e.target.parentElement.classList.contains('func-e-btn') && !e.target.classList.contains('func-card-label')) {
      setModal('on', 'detailsModal');
    }
    setCurrentCard(item);
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
      className='trello-board-list-item'
      ref={listItem}
      onClick={onClick}>
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
