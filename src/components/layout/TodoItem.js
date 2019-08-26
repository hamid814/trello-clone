import React from 'react';
import PropTypes from 'prop-types'


const TodoItem = ({ todo }) => {
  return (
    <div className="card rounded pl-2">
      {todo}
      <div className="float-right close">&times;</div>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired
}

export default TodoItem
