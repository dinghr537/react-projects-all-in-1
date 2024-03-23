import { useRef, useState } from 'react'

// import _ from 'lodash'
// import classNames from 'classnames'

function Son(props) {
  console.log(props)
  return <div>this is {props.name}</div>
}

function App() {
  const name = 'Jack'



  return (
    <div className="App">
      <Son name={name} />
    </div>
  );
}

export default App