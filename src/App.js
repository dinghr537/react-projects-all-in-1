import { useContext, useEffect, useRef, useState } from 'react'


const URL = "http://geek.itheima.net/v1_0/channels"

function Son() {
  useEffect(()=>{

    const timer = setInterval(()=>{
      console.log("running")
    }, 1000)

    return ()=>{
      clearInterval(timer)
    }
  }, [])
  return <div>Son</div>
}

function App() {
  const [value, setvalue] = useState(true)


  const handleClick = () => {
    setvalue(false)
  }
  return (
    <div className="App">
      <button onClick={handleClick}>卸载组件</button>
      {value && <Son />}
      
    </div>
  );
}

export default App