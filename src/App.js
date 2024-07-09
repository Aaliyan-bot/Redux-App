  import { increment } from './redux/action';
import { decrement } from './redux/action';
import { division } from './redux/action';
import { multiply } from './redux/action';
import { STRING } from './redux/types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const count = useSelector( (sate) => sate.count)
  
  const clickHandler = () => {
    dispatch(increment(2))
  }

  const handleAddFive = () => {
    dispatch(increment(5))
  }

  const handleAddTen = () => {
    dispatch(increment(10))
  }

  const handleSubtractTen = () => {
    dispatch(decrement(10))
  }
  const handleDivide2 = () => {
    dispatch(division(2))
  }
  const handleMultiplyTwo = () => {
    dispatch(multiply(2))
  }
  return (

<> 
<p>{count}</p>
<button onClick={clickHandler} class="button-6" role="button">+ 2</button>
<button onClick={handleAddFive} class="button-6" role="button">+ 5</button>
<button onClick={handleAddTen} class="button-6" role="button">+ 10</button>
<button onClick={handleSubtractTen} class="button-6" role="button">- 10</button>
<button onClick={handleDivide2} class="button-6" role="button">/ 2</button>
<button onClick={handleMultiplyTwo} class="button-6" role="button">* 2</button>
<footer>
<p>&copy; 2024 {STRING} </p>
</footer>

</>
  )
  }
export default App