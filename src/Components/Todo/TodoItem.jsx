import React from 'react';
import './todoitem.css'

const TodoItem = (props) => {
  const temp =  parseInt(props.item.weather.main.temp - 273.15)
  const date = props.item.date
  const icon = `http://openweathermap.org/img/wn/${props.item.weather.weather[0].icon}@2x.png`

  return (
    <div className="todo-item">
      <p className='todo-item__text'>{props.item.text}</p>
      <div className='todo-item__weather'>
        <img src={icon}></img>
        <p>{temp} ℃</p> 
        <p>{date.day} {date.month} {date.year}</p>
        <p>{date.time}</p>
      </div>
      <img className='todo-item__icon-exit' src="./img/icon-delete.png" onClick={() => props.removeHandler(props.item.id)}></img>
    </div>
  );
};

export default TodoItem;