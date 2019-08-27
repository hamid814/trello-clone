import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo: { id, text, done }, onCheck, onDelete, onEdit }) => {
  const onMarkComp = () => {
    onCheck(id);
  }
  const onDeleteClicked = () => {
    onDelete(id);
  }
  const onEditClicked = () => {
    onEdit(id);
  }

  return (
    <div className={`card rounded pl-2 ${done ? 'border-light' : 'border-dark'}`} onDoubleClick={onEditClicked}>
      <div className={`box cursor-p ${done ? '' : 'bg-dark'}`} onClick={onMarkComp}></div>
      {console.log(id)}
      <div className={`text text-dark${done && ' line-through text-light'}`}>{text}</div>
      <div className={`float-right close ${done && 'text-light'}`} onClick={onDeleteClicked}>&times;</div>
      <div className={`float-right text-sm mr-1 hover-warning close ${done && 'text-light'}`} onClick={onEditClicked} style={EStyle}>&euml;</div>
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
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
}

export default TodoItem
