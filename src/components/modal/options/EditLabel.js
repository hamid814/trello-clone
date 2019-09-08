import React, { useState, useEffect, useContext } from 'react';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';

const EditLabel = () => {
  const [text, setText] = useState('');
  const [wantToDelete, setWantToDelete] = useState(false);

  const { optionsModalStepData: label } = useContext(UserContext);
  const { colors } = useContext(BoardContext);

  useEffect(() => {
    setText(label.name);
    // eslint-disable-next-line
  }, [])

  const onChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div>
      <input type='text' className='m-0 text-85 p' value={text} placeholder='enter label name' onChange={onChange}/>
      <div className='text-85 mt mb'>
        pick a color
      </div>
      <div className='mb'>
        {
          colors.map(color => (
            <div key={color.name} style={{ background: color.color }} className='color-for-select hover-lighten'>
              { 
                color.name === label.colorName
                  && <i className='fas fa-check text-white m-0'></i> 
              }
            </div>
          ))
        }
      </div>
      <div>
        <div className='btn btn-success'>
          Save
        </div>
        <div className='btn btn-danger float-right'>
          Delete
        </div>
      </div>
    </div>
  )
}

export default EditLabel
