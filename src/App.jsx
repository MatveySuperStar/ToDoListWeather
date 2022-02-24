import React from 'react';
import style from './app.module.css';
import Input from './Components/Input/Input';
import TodoList from './Components/Todo/TodoList';

const App = () => {

  return (
    <div className={style.wrapper}>
      <TodoList></TodoList>
      <Input></Input>
    </div>  
  );
}

export default App;
