import { INCREMENT } from "./types"
import { DECREMENT } from "./types"
import { DIVSION } from "./types"
import { MULTIPLY } from "./types"
const intialState = {count: 0}
const reducer = (state = intialState, action) => {
    switch(action.type ) {
      case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload.incrementAmount
      }
      case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload.decrementAmount
      }
      case DIVSION:
      return {
        ...state,
        count: state.count / action.payload.divisionAmount
      }
      case MULTIPLY:
      console.log("Debug redux", action.payload)
      return{
        ...state,
        count: state.count * action.payload.multiplyAmount
      }
      default: 
      return state
    }
  }
export default reducer;  