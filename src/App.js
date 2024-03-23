import { useState } from "react";

function App() {
  // const handleClick = () => {
  //   console.log("CLICKKKKKKK")
  // }
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <button onClick={handleClick}>click me: {count}</button>
    </div>
  );
}

export default App;
