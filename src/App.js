import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, addToNum } from './store/modules/counterStore';

function App() {
  const { count } = useSelector( state => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>set to 10</button>
    </div>
  );
}

export default App;
