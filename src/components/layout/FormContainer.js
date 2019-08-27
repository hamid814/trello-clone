import React , { useState, useEffect } from 'react';
import PropTypes from 'prop-types'


const FormContainer = ({ addTodo, current, onUpdate }) => {
  

  useEffect(() => {
    if(current !== null) {
      setText(current.text, current.id);
    }
    // eslint-disable-next-line
  }, [current])

  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const [wantToAddEmpty, setWantToAddEmpty] = useState(false);
  
  const onChange = (e) => {
    setText(e.target.value);
  }

  const onSubmit = () => {
    if(!current) {
      if(text !== '') {
        addTodo(text);
        setText('');
        setWantToAddEmpty(false);
      } else {
        setError(true);
        setWantToAddEmpty(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
    } else {
      onUpdate(text, current.id);
      setText('');
    }
  }

  const onBack = () => {
    onUpdate(current.text, current.id);
    setText('');
  }

  const onKeyDown = (e) => {
    if(e.keyCode === 13) {
      onSubmit();
    }
  }

  const onAddEmpty = () => {
    addTodo('');
    setWantToAddEmpty(false);
  }

  return (
    <div className='form-container border border-light p-2 pb-1'>
      <h2 className={current ? 'text-success' : 'text-primary'}>{current ? 'Edit Todo' : 'Add Todo'}</h2>
      <input id='input' type='text' className="border-primary" onChange={onChange} onKeyDown={onKeyDown} value={text} />
      <div className={!wantToAddEmpty ? current ? 'form-group grid-3-1' : 'form-group' : 'form-group grid-3-1'}>
        <input
        onClick={onSubmit}
        type='submit'
        className='btn btn-primary btn-block mt-0'
        value={!current ? !error ? 'Add' : 'Please enter somethig' : 'Update'}/>
        {
          current
          ? <input
            onClick={onBack}
            type='submit'
            className='btn btn-warning btn-block mt-0 p-0'
            value='back' />
          : <input
            onClick={onAddEmpty}
            type='submit'
            className={wantToAddEmpty ? 'btn btn-light btn-block mt-0 p-0' : 'd-n'}
            value='Add empty' />
        }
        
      </div>
    </div>
  )
}

FormContainer.propTypes = {
  addTodo: PropTypes.func.isRequired,
  current: PropTypes.object,
  onUpdate: PropTypes.func.isRequired,
}

export default FormContainer
