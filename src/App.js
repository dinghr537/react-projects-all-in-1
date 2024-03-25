import { useRef, useState } from 'react'

// import _ from 'lodash'
// import classNames from 'classnames'

function A(props) {
  const name = "This is A name"
  console.log(props.age)
  return (
    <div>
      This is A.
      <button onClick={()=>props.onGetAName(name)}>send</button>
    </div>
  )
}

function B(props) {
  return (
    <div>
      This is B.
      {props.name}
    </div>
  )
}

function App() {
  const [name, setName] = useState('')

  const getAName = (name) => {
    console.log(name)
    setName(name)
  }



  return (
    <div className="App">
      This is App.
      <A onGetAName={getAName} age={20}/>
      <B name={name}/>
      
    </div>
  );
}

export default App