import React , { useState, useEffect } from 'react';
import PropTypes from 'prop-types'


const FormContainer = ({ addTodo, current, onUpdate }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const [wantToAddEmpty, setWantToAddEmpty] = useState(false);

  useEffect(() => {
    if(current !== null) {
      setText(current.text, current.id);
    }
    // eslint-disable-next-line
  }, [])

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onSubmit = () => {
    if(!current) {
      if(text !== '') {
        addTodo(text);
        setText('');
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

  const onKeyDown = (e) => {
    if(e.keyCode === 13) {
      onSubmit();
    }
  }

  const onAddEmpty = () => {
    addTodo('');
  }

  return (
    <div className='form-container border-bottom'>
      <h2>Add Todo</h2>
      <input type='text' onChange={onChange} onKeyDown={onKeyDown} value={text} />
      <div className={!wantToAddEmpty ? 'form-group' : 'form-group grid-3-1'}>
        <input
        onClick={onSubmit}
        type='submit'
        className='btn btn-white btn-block mt-0'
        value={!current ? !error ? 'Add' : 'Please enter somethig' : 'Update'}/>
      <input
        onClick={onAddEmpty}
        type='submit'
        className={wantToAddEmpty ? 'btn btn-light btn-block mt-0 p-0' : 'd-n'}
        value='Add empty' />
      </div>
    </div>
  )
}

FormContainer.propTypes = {
  addTodo: PropTypes.func.isRequired,
  current: PropTypes.object
}

export default FormContainer
