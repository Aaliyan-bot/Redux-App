import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore } from 'redux'


//Store -> Globalized Satate
const intialState = {count: 0}
//Action Increment
const increment = (incrementAmount) => {
   return {
    type: 'INCREMENT',
    payload: {incrementAmount}
  }
   
  }

const decrement = (decrementAmount) => {
   return {
    type: 'DECREMENT',
    payload: {decrementAmount}
   }
}
const division = (divisionAmount) => {
  return{
  type: 'DIVSION',
  payload: {divisionAmount}
  }
}
const multiply = (multiplyAmount) => {
  return{
    type: 'MULTIPLY',
    payload: {multiplyAmount}
  }
}
//Reducer


const reducer = (state = intialState, action) => {
  switch(action.type ) {
    case 'INCREMENT':
    return {
      ...state,
      count: state.count + action.payload.incrementAmount
    }
    case 'DECREMENT':
    return {
      ...state,
      count: state.count - action.payload.decrementAmount
    }
    case 'DIVSION':
    return {
      ...state,
      count: state.count / action.payload.divisionAmount
    }
    case 'MULTIPLY':
    return{
      ...state,
      count: state.count * action.payload.multiplyAmount
    }
    default: 
    return state
  }
}

//Dispatch
const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
    <App/>
  </Provider>,
  </React.StrictMode>
);


reportWebVitals();
