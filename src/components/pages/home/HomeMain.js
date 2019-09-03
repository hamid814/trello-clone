import React from 'react';
import Recent from './Recent';
import Starred from './Starred';

const HomeMain = () => {
  return (
    <main className="text-bold">
      <Starred />
      <Recent />
      <div className="card border-0">
        <div className="trello-home-main-item hover">
          Add Board
        </div>
      </div>
    </main>
  )
}

export default HomeMain
