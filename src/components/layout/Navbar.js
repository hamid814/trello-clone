import React, { useContext } from 'react';

import UserContext from '../../context/user/userContext';

const Navbar = () => {
  const userContext = useContext(UserContext);

  const { clearCurrentBoardId } = userContext;

  const homeClick =() => {
    clearCurrentBoardId();
  }

  return (
    <div className="trello-navbar">
      <div>
        <div className="btn btn-square btn-primary rounded-lg" onClick={homeClick}>
          <i className="fa fa-home"></i>
        </div>
        <div className="btn btn-narrow btn-primary rounded-lg">
          <i className="mr-1 fa fa-notes-medical"></i>
          boards
        </div>
        <div className="d-i-b rounded-lg">
          <input type="text" className="m-0 bg-primary border-0 rounded-lg" id="search-input"/>
        </div>
      </div>
      <div className="mr-5">
        <div className="text-white text-bold cursor-p">
          <div className="m mt-0 ml-0 mb-0">
            trello
          </div>
          <div className="bg-white text-primary d-i-b border-0 p pt-0 pb-0 pr-0">
            clone
          </div>
        </div>
      </div>
      <div>
        <div className="btn btn-square btn-primary rounded-lg">
          <i className="fa fa-plus"></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar
