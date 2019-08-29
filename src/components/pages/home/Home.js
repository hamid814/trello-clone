import React from 'react';
import HomeSideList from './HomeSideList';
import HomeMain from './HomeMain';


const Home = () => {
  return (
    <div className="container grid-1-3 mt-2">
      <HomeSideList />
      <HomeMain />
    </div>
  )
}

export default Home
