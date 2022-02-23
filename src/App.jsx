import React from 'react';
import './App.css';
import Input from './Components/Input/Input';
import TodoList from './Components/Todo/TodoList';

const App = () => {

  return (
    <div className='wrapper'>
      <TodoList></TodoList>
      <Input></Input>
    </div>  
  );
}

export default App;
