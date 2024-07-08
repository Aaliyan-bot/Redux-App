//Action | Redux X React.js
export const increment = (incrementAmount) => {
    return {
     type: 'INCREMENT',
     payload: {incrementAmount}
   }
    
   }
 
 export const decrement = (decrementAmount) => {
    return {
     type: 'DECREMENT',
     payload: {decrementAmount}
    }
 }
  export const division = (divisionAmount) => {
  return{
  type: 'DIVSION',
  payload: {divisionAmount}
  }
}
export const multiply = (multiplyAmount) => {
  return{
    type: 'MULTIPLY',
    payload: {multiplyAmount}
  }
}
 