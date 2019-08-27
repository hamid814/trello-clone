import React , { useState } from 'react';

const FormContainer = ({ addTodo, todoEmpty }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [wantToAddEmpty, setWantToAddEmpty] = useState(false);

  const onChange = (e) => {
    setName(e.target.value);
  }

  const onSubmit = () => {
    if(name !== '') {
      addTodo(name);
      setName('');
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
    <div className={`form-container ${todoEmpty ? '': 'border-bottom'}`}>
      <h2>Add Todo</h2>
      <input type='text' onChange={onChange} onKeyDown={onKeyDown} value={name} />
      <div className={!wantToAddEmpty ? 'form-group' : 'form-group grid-2'}>
        <input
        onClick={onSubmit}
        type='submit'
        className='btn btn-white btn-block mt-0'
        value={!error ? 'Add' : 'please enter somethig'}/>
      <input
        onClick={onAddEmpty}
        type='submit'
        className={wantToAddEmpty ? 'btn btn-light btn-block mt-0 p-0' : 'd-none'}
        value='Add Empty (some other shape)' />
      </div>
    </div>
  )
}

export default FormContainer
