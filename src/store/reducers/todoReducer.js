import { defaultState } from "../state"

const ADD_RECORD = "ADD_RECORD"
const REMOVE_RECORD = "REMOVE_RECORD"

export const todoReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_RECORD : {
      return {...state, todolist: [...state.todolist, action.payload]}
    }
    case REMOVE_RECORD : {
      return {...state, todolist: state.todolist.filter(item => item.id !== action.payload)}
    }
    default: 
      return {...state};
  }
}

export const addTodoAction = (payload) => ({type: ADD_RECORD, payload})
export const removeTodoAction = (payload) => ({type: REMOVE_RECORD, payload})