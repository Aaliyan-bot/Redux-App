import { increment } from './action';
import { decrement } from './action';
import { division } from './action';
import { multiply } from './action';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const count = useSelector( (sate) => sate.count)
  const clickHandler = () => {
    dispatch(increment(2))

  }

  const dispatch1 = useDispatch()
  const coudnt = useSelector( (state) => state.count)
  const clickdHandler1 = () => {
    dispatch1(increment(5))

  }
  const dispatch2 = useDispatch()
  const coudntS = useSelector( (state) => state.count)
  const clickdHandlerd2 = () => {
    dispatch2(increment(10))
  }
    const dispatch3 = useDispatch()
    const counts =  useSelector ( (state) => state.count)
    const clickdHandler3 = () => {
      dispatch3(decrement(10))
    }
    const dispatch4  = useDispatch()
    const countsd = useSelector ((state) => state.count)
    const clickdHandler4 = () => {
      dispatch4(division(2))
    }
    const dispatch5 = useDispatch()
    const countsdd = useSelector ((state) => state.count)
    const clickdHandler5 = () => {
      dispatch5(multiply(2))
    }
  return (

<> 
<p>{count}</p>
<button onClick={clickHandler} class="button-6" role="button">+ 2</button>
<button onClick={clickdHandler1} class="button-6" role="button">+ 5</button>
<button onClick={clickdHandlerd2} class="button-6" role="button">+ 10</button>
<button onClick={clickdHandler3} class="button-6" role="button">- 10</button>
<button onClick={clickdHandler4} class="button-6" role="button">/ 2</button>
<button onClick={clickdHandler5} class="button-6" role="button">* 2</button>

</>
  )
  }
export default App