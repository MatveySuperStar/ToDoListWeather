import React, {useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {

  const [item, setItem] = useState([]);

  return (
    <div>
      <TodoItem />
    </div>
  );
};

export default TodoList;