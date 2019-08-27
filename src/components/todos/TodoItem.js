import React from 'react';
import PropTypes from 'prop-types'


const TodoItem = ({ todo, markComplete, onDelete }) => {
  const onMarkComp = () => {
    markComplete(todo.id);
  }

  const onDeleteClicked = () => {
    onDelete(todo.id);
  }

  return (
    <div className='card rounded pl-2'>
      <div className={`box mr-1 cursor-p ${todo.done ? '' : 'bg-dark'}`} onClick={onMarkComp}></div>
      <div className={`text text-dark${todo.done ? ' line-through' : ''}`}>{todo.text}</div>
      <div className='float-right close' onClick={onDeleteClicked}>&times;</div>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
}

export default TodoItem
