import React from 'react'

const BoardNavbar = ({ board }) => {
  return (
    <div className="trello-board-navbar trello-navbar lighten-20">
      <div className="card border-0 m-0 p-0 ml-1 text-white">
        { board && board.title }
        <div className="btn btn-primary btn-square rounded-lg lighten-20 ml-1">
          <i className="fas fa-star text-warning"></i>
        </div>
        <div className="btn btn-primary btn-square rounded-lg lighten-20 ml-1">
          <i className="far fa-star"></i>
        </div>
      </div>
    </div>
  )
}

export default BoardNavbar
