import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTextAction, removeTextAction } from '../../store/reducers/inputReducer';
import { addTodoAction } from '../../store/reducers/todoReducer';
import { checkTextAction } from '../../store/reducers/checkTextReducer';
import { dateBuilder, randomNumber, getWeather } from './functions';
import style from './input.module.css';


const Input = () => {
  const dispatch = useDispatch();
  const text = useSelector(state => state.input.text)
  const check = useSelector(state => state.checkText.checktext)

  const checkLength = (event) => {

    if(event.target.value.length >= 300) {
      dispatch(checkTextAction(false))
    } else {
      dispatch(checkTextAction(true))
    }

    dispatch(addTextAction(event.target.value))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if(check && text.length > 0) {
      const weather = await getWeather()
      const id = randomNumber()

      dispatch(removeTextAction())
      dispatch(addTodoAction({id, text, date: dateBuilder(new Date()), weather}))
    } else {
      dispatch(checkTextAction(false))
    } 
  } 

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <p className={style.title}>Add Note ... {text.length}</p>
      <input className={style.input} value={text} onChange={checkLength}></input>
      <p className={check ? style.disable : style.active}>Ошибка</p>
    </form>
  );
};

export default Input;