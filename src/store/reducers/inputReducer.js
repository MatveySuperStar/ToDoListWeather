import { defaultState } from "../state"

const ADD_TEXT = "ADD_TEXT"
const REMOVE_TEXT = "REMOVE_TEXT"

export const inputReducer = (state = defaultState, action) => {

  switch(action.type) {
    case ADD_TEXT : {
      return {...state, text: action.payload}
    }
    case REMOVE_TEXT : {
      return {...state, text: action.payload}
    }
    default: 
      return {...state};
  }
}

export const addTextAction = (payload) => ({type: ADD_TEXT, payload})
export const removeTextAction = (payload) => ({type: REMOVE_TEXT, payload:""})