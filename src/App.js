import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, addToNum } from './store/modules/counterStore';
import { fetchChannelList } from './store/modules/channelStore'
import { useEffect } from 'react';

function App() {
  const { count } = useSelector( state => state.counter)
  const { channelList } = useSelector(state => state.channel)
  const dispatch = useDispatch()
  useEffect(() => {
    // console.log("CALLED")
    dispatch(fetchChannelList())
  }, [dispatch])
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>set to 10</button>
      <ul>
        { channelList.map((item) => <li key={item.id}>{item.name}</li>) }
      </ul>
    </div>
  );
}

export default App;
