import React from 'react'

const TodoItem = ({ todo }) => {
  return (
    <div className="card rounded">
      {todo}
      <div className="mr-1">right</div>
    </div>
  )
}

export default TodoItem
