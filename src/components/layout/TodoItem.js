import React from 'react'

const TodoItem = ({ todo }) => {
  return (
    <div className="card rounded">
      {todo}
    </div>
  )
}

export default TodoItem
