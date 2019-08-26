import React , { useState } from 'react';

const FormContainer = (props) => {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [wantToAddEmpty, setWantToAddEmpty] = useState(false);

  const onChange = (e) => {
    setName(e.target.value);
  }

  const onSubmit = () => {
    if(name !== '') {
      props.addTodo(name);
      setName('');
    } else {
      setError(true);
      setWantToAddEmpty(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }

  return (
    <div className="form-container border-bottom">
      <h2>Add Todo</h2>
      <input type="text" onChange={onChange} value={name}/>
      <input
        onClick={onSubmit}
        type="submit"
        className="btn btn-white btn-block mt-0"
        value={!error ? 'Add' : 'please enter somethig'}/>     
    </div>
  )
}

export default FormContainer
