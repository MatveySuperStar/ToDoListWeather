import { defaultState } from "../state"

const CHECK_TEXT = "CHECK_TEXT"

export const checkTextReducer = (state = defaultState, action) => {
  switch(action.type) {
    case CHECK_TEXT : {
      return {...state, checktext: action.payload}
    }
    default: 
      return {...state};
  }
}

export const checkTextAction = (payload) => ({type: CHECK_TEXT, payload})