import React, { useState, useEffect, useContext } from 'react';

import UserContext from '../../../context/user/userContext';
import BoardContext from '../../../context/board/boardContext';
import AlertContext from '../../../context/alert/alertContext';

const EditLabel = () => {
  const [text, setText] = useState('');
  const [colorName, setColorName] = useState(null);
  const [wantToDelete, setWantToDelete] = useState(false);

  const { setOptionsModal, setOptionsModalStep, optionsModalStepData: data } = useContext(UserContext);
  const { colors, addLabel, updateLabel, deleteLabel } = useContext(BoardContext);
  const { setAlert } = useContext(AlertContext);

  useEffect(() => {
    data.type === 'edit' && setText(data.label.name);
    data.type === 'edit' ? setColorName(data.label.colorName) : setColorName('green');
    // eslint-disable-next-line
  }, [])

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onColorClick = (e) => {
    setColorName(e.target.id);
  }

  const onSave = () => {
    if(data.type === 'edit') {
      console.log('edit this label')
    } else if(data.type === 'create') {
      addLabel(text, colorName);
    }
  }

  const onDelete = () => {
    data.type === 'edit' && deleteLabel(data.label.id);
    setOptionsModal('on', 'editCardLabels');
    setOptionsModalStep('off');
    setAlert('Label deleted', 'dark');
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
            <div key={color.name} style={{ background: color.color }} className='color-for-select hover-lighten' id={color.name} onClick={onColorClick}>
              { 
                color.name === colorName
                  && <i className='fas fa-check text-85 text-white m-0'></i> 
              }
            </div>
          ))
        }
      </div>
      <div>
        <div className='btn btn-success' onClick={onSave}>
          {
            data.type === 'edit'
              ? 'Save'
              : 'Create'
          }
        </div>
        {
          data.type === 'edit'
            &&  <div className='btn btn-danger float-right' onClick={onDelete}>
                  Delete
                </div>
        }
        
      </div>
    </div>
  )
}

export default EditLabel
