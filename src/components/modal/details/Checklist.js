import React, { useState, useContext } from 'react';
import uniqid from 'uniqid';
import CheckListItem from './CheckListItem';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const Checklist = ({ checklist }) => {
  const { updateCard } = useContext(BoardContext);
  const { currentBoardId, currentListId, currentCard, setCurrentCard, setOptionsModal, setData } = useContext(UserContext);

  const [text, setText] = useState('')
  const [isAdding, setIsAdding] = useState(false)
  const [hideDone, setHideDone] = useState(false)

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onKeyUp = (e) => {
    if(e.keyCode === 13) {
      onAddItem(); 
    }
  }

  const onDeleteList = () => {
    setOptionsModal('on', 'deleteChecklist');
    setData(checklist.id);
  }

  const onStartAdd = () => {
    setIsAdding(true);
  }

  const onCancelAdd = () => {
    setIsAdding(false);
  }

  const onAddItem = () => {
    if(text !== '') {
      const newItem = {
        text,
        id: uniqid(),
        done: false
      }

      const newCard = {
        ...currentCard,
        checklists: currentCard.checklists.map(c => {
          if(c.id === checklist.id) {
            c.items = [...c.items, newItem]
          }
          return c
        })
      }

      updateCard(currentBoardId, currentListId, currentCard.id, newCard);
      setCurrentCard(newCard);
      setText('');
    }
  }

  const getNumberOfDones = () => {
    let num = 0;

    checklist.items.forEach(i => {
      if(i.done) {
        num++
      }
    })

    return num
  }

  const progress = {
    width: `${Math.floor(getNumberOfDones() / checklist.items.length * 100)}%`
  }

  return (
    <div>
      <div className='text-85 mb mt'>
        { checklist.title }
        <div className='float-right'>
          <div className='btn text-85 mr-0' onClick={onDeleteList}>
            Delete
          </div>
        </div>
      </div>
      <div className="grid-1-10 width-100">
        <div className='text-85 mt'>
          { `${Math.floor(getNumberOfDones() / checklist.items.length * 100)}%` }
        </div>
        <div className='progress-bar'>
          <div style={progress} className='progress'></div>
        </div>
      </div>
      
      <div className='mt'>
        {
          checklist.items.map(i => (
            <CheckListItem key={i.id} item={i} clId={checklist.id} />
          ))
        }
      </div>
      <div className={`${!isAdding && 'd-n'}`}>
        <input
          type='text'
          className='text-85 p m-0 mt-1 mb'
          placeholder='Add an item'
          value={text}
          onKeyUp={onKeyUp}
          onChange={onChange}/>
        <div className='btn btn-success' onClick={onAddItem}>
          Add
        </div>
        <div className='d-i-b cursor-p text-lg' onClick={onCancelAdd}>
          &times;
        </div>
      </div>
      <div className={`btn mt text-85 ${isAdding && 'd-n'}`} onClick={onStartAdd}>
        Add an item
      </div>
    </div>
  )
}

export default Checklist
