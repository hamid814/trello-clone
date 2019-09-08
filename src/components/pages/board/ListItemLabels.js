import React, { useState } from 'react';
import CardLabel from './CardLabel';

const ListItemLabels = ({ labels }) => {
  const [bigLabels, setbigLabels] = useState(false);
  const [hover, setHover] = useState(false);

  const onClick = () => {
    setbigLabels(!bigLabels);
  }

  const onMouseEnter = () => {
    setHover(true);
  }

  const onMouseLeave = () => {
    setHover(false);
  }

  return (
    <div className={`trello-board-list-item-labels-container m-0 p-0 ${hover && 'darken-30'}`}>
      {
        labels.map(l => <CardLabel key={l} label={l} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} bigLabels={bigLabels} />)
      }
    </div>
  )
}

export default ListItemLabels
