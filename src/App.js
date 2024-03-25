import { useContext, useEffect, useRef, useState } from 'react'


const URL = "http://geek.itheima.net/v1_0/channels"

function App() {
  const [value, setvalue] = useState(0)

  // 没有依赖项: 初始+组建更新
  useEffect(()=>{
    console.log("Executed!")
  })
  // 空数组: 初始
  useEffect(()=>{
    console.log("Executed with []")
  }, [])

  // 特定依赖项
  useEffect(()=>{
    console.log("Executed with [value]")
  }, [value])

  const handleClick = () => {
    setvalue(value+1)
  }
  return (
    <div className="App">
      This is App.
      count: {value}
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default App