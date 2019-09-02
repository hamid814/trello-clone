import React from 'react';
import Recent from './Recent';
import Starred from './Starred';
import AddBoard from '../../boards/AddBoard';

const HomeMain = () => {
  return (
    <main className="text-bold">
      <Recent />
      <Starred />
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
