import React from 'react'

const Todos = (props) => {
  return (
    <div className="form-container">
      {props.todos.forEach(todo => {
        return todo
        })}
    </div>
  )
}

export default Todos
