import React from 'react';
import Recent from './Recent';
import Pinned from './Pinned';
import AddBoard from '../../boards/AddBoard';

const HomeMain = () => {
  return (
    <main className="text-bold">
      <div className="card border-top-0 border-right-0 border-left-0 pb-2">
        <Recent />
      </div>
      <div className="card border-top-0 border-right-0 border-left-0 pb-2">
        <Pinned />
        to be done
      </div>
      <div className="card border-0">
        <div className="trello-home-main-item hover">
          {/* <AddBoard /> */}
          Add Board
        </div>
      </div>
    </main>
  )
}

export default HomeMain
