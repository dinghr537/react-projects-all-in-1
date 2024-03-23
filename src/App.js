import { useRef, useState } from 'react'

// import _ from 'lodash'
// import classNames from 'classnames'


function App() {
  const inputRef = useRef(null)

  const showDom = () => {
    console.dir(inputRef.current)
  }

  return (
    <div className="App">
      <input 
      type='text'
      ref={inputRef}/>
      <button onClick={showDom}>get dom</button>
    </div>
  );
}

export default App