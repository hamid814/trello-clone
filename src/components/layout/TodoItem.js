import React from 'react';
import PropTypes from 'prop-types'


const TodoItem = ({ todo }) => {
  return (
    <div className="card rounded pl-2">
      <div className="box mr-1 bg-dark cursor-p"></div>
      <div className="text text-dark">{todo}</div>
      <div className="float-right close">&times;</div>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired
}

export default TodoItem
