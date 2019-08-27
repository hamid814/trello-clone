import React , { useState } from 'react';

const FormContainer = ({ addTodo, todosEmpty }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const [wantToAddEmpty, setWantToAddEmpty] = useState(false);

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onSubmit = () => {
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
        value={!error ? 'Add' : 'please enter somethig'}/>
      <input
        onClick={onAddEmpty}
        type='submit'
        className={wantToAddEmpty ? 'btn btn-light btn-block mt-0 p-0' : 'd-n'}
        value='Add empty' />
      </div>
    </div>
  )
}

export default FormContainer
