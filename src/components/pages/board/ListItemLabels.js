import React from 'react';
import CardLabel from './CardLabel';

const ListItemLabels = ({ labels }) => {
  return (
    <div className='card-labels-container m-0 p-0'>
      {
        labels.map(l => <CardLabel key={l} label={l} />)
      }
    </div>
  )
}

export default ListItemLabels
