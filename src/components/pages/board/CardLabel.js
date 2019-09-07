import React, { useContext } from 'react';

import BoardContext from '../../../context/board/boardContext';

const CardLabel = ({ label }) => {
  const { labels } = useContext(BoardContext);

  const thisLabel = labels.filter(l => l.id === label)[0];

  return (
    <div className={`d-i-b label label-color-${thisLabel.colorName}`}>
      
    </div>
  )
}

export default CardLabel
