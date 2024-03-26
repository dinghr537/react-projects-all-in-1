import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './store/modules/counterStore';

function App() {
  const { count } = useSelector( state => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default App;
