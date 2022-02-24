import React from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import './todolist.css';
import { removeTodoAction } from '../../store/todoReducer';

const TodoList = () => {
  const todolist = useSelector(state => state.todolist.todolist)
  const dispatch = useDispatch()
  
  const removeHandler = (id) => {
    dispatch(removeTodoAction(id));
  }

  return (
    <div className='todo-list'>
      { todolist.length ? 
        todolist.map(item => <TodoItem key={item.id} item={item} removeHandler={removeHandler}/>) :
        <p>Записей пока нет</p>
      }
    </div>
  );
};

export default TodoList;