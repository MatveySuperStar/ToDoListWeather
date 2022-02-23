import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import './input.css';

const Input = () => {

  const [error, setError] = useState(false);
  const [text, setText] = useState("");

  const checkLength = (event) => {
    if(event.target.value.length >= 10) {
      setError(true)
    } else {
      setError(false)
    }
    setText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if(!error) {
      console.log(text)
    }
  } 

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className='form__title'>Add Note ...</p>
      <input className='form__input' value={text} onChange={checkLength}></input>
      <p className={`form__error_${error ? 'active' : 'disable'}`}>Ошибка</p>
    </form>
  );
};

export default Input;