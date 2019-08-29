import React from 'react'

const Navbar = () => {
  return (
    <div className="trello-navbar">
      <div>
        <div className="btn btn-square btn-primary">
          <i className="fa fa-home"></i>
        </div>
        <div className="btn btn-narrow btn-primary">
          <i className="mr-1 fa fa-notes-medical"></i>
          boards
        </div>
        <div className="d-i-b bg-primary">
          <input type="text" className="m-0 bg-primary border-0 rounded" id="search-input"/>
        </div>
      </div>
      <div className="mr-5">
        <div className="text-primary text-bold cursor-p">trello clone</div>
      </div>
      <div>
        <div className="btn-square btn-primary">
          <i className="fa fa-plus"></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar
