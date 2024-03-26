import { useContext, useEffect, useRef, useState } from 'react'


// 自定义hook

function useToggle() {
  const [value, setvalue] = useState(true)

  const toggle = () => {
    setvalue(!value)
  }

  return {
    value,
    toggle
  }
}


function App() {
  // const [value, setvalue] = useState(true)
  // const toggle = () => {
  //   setvalue(!value)
  // }

  const {value, toggle} = useToggle()
  return (
    <div className="App">
      {/* <button onClick={toggle}>click me</button>
      {value && <div>Here</div>} */}
      <button onClick={toggle}>useToggle</button>
      {value && <div>And here</div>}
      
    </div>
  );
}

export default App