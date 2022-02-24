import { createStore, combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { inputReducer } from "./reducers/inputReducer";
import { checkTextReducer } from "./reducers/checkTextReducer";

const rootReducer = combineReducers({
  todolist: todoReducer,
  input: inputReducer,
  checkText: checkTextReducer
})

export const store = createStore(rootReducer);