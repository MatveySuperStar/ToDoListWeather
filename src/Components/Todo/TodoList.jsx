import React from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodoAction } from '../../store/reducers/todoReducer';
import style from './todo.module.css';

const TodoList = () => {
  const todolist = useSelector(state => state.todolist.todolist)
  const dispatch = useDispatch()
  
  const removeHandler = (id) => {
    dispatch(removeTodoAction(id));
  }

  return (
    <div className={style.list}>
      <h2 className={style.title}>TO DO LISTS</h2>
      { todolist.length ? 
        todolist.map(item => <TodoItem key={item.id} item={item} removeHandler={removeHandler}/>) :
        <h2 className={style.message}>No entries yet</h2>
      }
    </div>
  );
};

export default TodoList;