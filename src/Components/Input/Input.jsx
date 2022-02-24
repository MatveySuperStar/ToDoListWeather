import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTextAction, removeTextAction } from '../../store/inputReducer';
import { addTodoAction } from '../../store/todoReducer';
import { checkTextAction } from '../../store/checkTextReducer';
import { dateBuilder, randomNumber, getWeather } from './functions';
import './input.css';


const Input = () => {
  const dispatch = useDispatch();
  const text = useSelector(state => state.input.text)
  const check = useSelector(state => state.checkText.checktext)

  const checkLength = (event) => {
    if(text.length >= 300) {
      dispatch(checkTextAction(false))
    } else {
      dispatch(checkTextAction(true))
    }

    dispatch(addTextAction(event.target.value))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if(check) {
      const weather = await getWeather();
      const id = randomNumber();
      dispatch(removeTextAction(""))
      dispatch(addTodoAction({id, text, date: dateBuilder(new Date()), weather}))
    }
  } 

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className='form__title'>Add Note ...</p>
      <input className='form__input' value={text} onChange={checkLength}></input>
      <p className={`form__error_${check ? 'disable' : 'active'}`}>Ошибка</p>
    </form>
  );
};

export default Input;