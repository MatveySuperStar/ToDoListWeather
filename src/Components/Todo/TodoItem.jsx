import React from 'react';
import style from './todo.module.css';

const TodoItem = (props) => {
  const temp =  parseInt(props.item.weather.main.temp - 273.15)
  const date = props.item.date
  const icon = `http://openweathermap.org/img/wn/${props.item.weather.weather[0].icon}@2x.png`

  return (
    <div className={style.item}>
      <p className={style.text}>{props.item.text}</p>
      <div className={style.weather}>
        <img src={icon}></img>
        <p>{temp} ℃</p> 
        <p>{date.day} {date.month} {date.year}</p>
        <p>{date.time}</p>
      </div>
      <img className={style.exit} src="./img/icon-delete.png" onClick={() => props.removeHandler(props.item.id)}></img>
    </div>
  );
};

export default TodoItem;