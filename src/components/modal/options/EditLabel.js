import React, { useContext } from 'react';

import UserContext from '../../../context/user/userContext';

const EditLabel = () => {
  const { optionsModalStepData } = useContext(UserContext);

  console.log(optionsModalStepData)

  return (
    <div>
      editLabel
    </div>
  )
}

export default EditLabel
