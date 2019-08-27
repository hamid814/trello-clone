import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import TodoContext from '../../context/todo/todoContext';

const TodoItem = ({ todo: { id, text, done }, onCheck, onDelete }) => {
  const todoContext = useContext(TodoContext);

  const { editTodo } = todoContext;

  const onMarkComp = () => {
    onCheck(id);
  }
  const onDeleteClicked = () => {
    onDelete(id);
  }
  const onEdit = () => {
    editTodo();
  }

  return (
    <div className={`card rounded pl-2 ${done ? 'border-light' : 'border-dark'}`} onDoubleClick={onEdit}>
      <div className={`box cursor-p ${done ? '' : 'bg-dark'}`} onClick={onMarkComp}></div>
      <div className={`text text-dark${done && ' line-through text-light'}`}>{text}</div>
      <div className={`float-right close ${done && 'text-light'}`} onClick={onDeleteClicked}>&times;</div>
      <div className={`float-right text-sm mr-1 hover-warning close ${done && 'text-light'}`} onClick={onEdit} style={EStyle}>&euml;</div>
    </div>
  )
}

const EStyle = {
  height: '8px !important',
  overfloxY: 'none'
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func
}

export default TodoItem
