import React, { useState } from 'react'

const SideListItem = ({ board }) => {
  const [isHover, setIsHover] = useState(false);

  const hoverStyle = isHover ? {
    background: board.color,
    color: '#f4f4f4',
    // opacity: '0.7'
  } : {
    opacity: '1'
  }

  const onMouseEnter = () => {
    setIsHover(true);
  }

  const onMouseLeave = () => {
    setIsHover(false);
  }

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="card pl-1 cursor-p p border-0 rounded-lg text-dark transition text-bold" style={hoverStyle}>
      {board.title}
      { <i className="fa fa-check m-0 float-right"></i> }
    </div> 
  );
};

export default SideListItem