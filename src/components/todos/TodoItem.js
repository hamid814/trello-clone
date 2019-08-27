import React from 'react';
import PropTypes from 'prop-types';


const TodoItem = ({ todo: { id, text, done }, markComplete, onDelete, onEdit }) => {
  const onMarkComp = () => {
    markComplete(id);
  }

  const onDeleteClicked = () => {
    onDelete(id);
  }

  const onDoubleClick = () => {
    onEdit(id);
  }

  return (
    <div className={`card rounded pl-2 ${done ? 'border-light' : 'border-dark'}`} onDoubleClick={onDoubleClick}>
      <div className={`box mr-1 cursor-p ${done ? '' : 'bg-dark'}`} onClick={onMarkComp}></div>
      <div className={`text text-dark${done && ' line-through text-light'}`}>{text}</div>
      <div className={`float-right close ${done && 'text-light'}`} onClick={onDeleteClicked}>&times;</div>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
}

export default TodoItem
