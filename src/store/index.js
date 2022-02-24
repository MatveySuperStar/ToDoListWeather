import { createStore, combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { inputReducer } from "./inputReducer";
import { checkTextReducer } from "./checkTextReducer";

const rootReducer = combineReducers({
  todolist: todoReducer,
  input: inputReducer,
  checkText: checkTextReducer
})

export const store = createStore(rootReducer);