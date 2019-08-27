import React from 'react';
import PropTypes from 'prop-types'


const TodoItem = ({ todo, markComplete }) => {
  const onMarkComp = () => {
    markComplete(todo.id);
  }

  return (
    <div className='card rounded pl-2'>
      <div className={`box mr-1 cursor-p ${todo.done ? 'bg-success' : 'bg-dark'}`} onClick={onMarkComp}></div>
      <div className={`text text-dark${todo.done ? ' line-through' : ''}`}>{todo.text}</div>
      <div className='float-right close'>&times;</div>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
}

export default TodoItem
