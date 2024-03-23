import { useRef, useState } from 'react'

// import _ from 'lodash'
// import classNames from 'classnames'

function Son(props) {
  console.log(props)
  return (
    <div>
      <div>this is {props.name}</div>
      {props.children}
    </div>
  )
}

function App() {
  const name = 'Jack'



  return (
    <div className="App">
      <Son name={name} >
        <span>this is children</span>
      </Son>
    </div>
  );
}

export default App