import { useContext, useRef, useState } from 'react'

import { createContext } from 'react'

const MsgContext = createContext()

function A() {
  
  return (
    <div>
      This is A.
      <B />
    </div>
  )
}

function B(props) {
  const message = useContext(MsgContext)

  return (
    <div>
      This is B. 
      {message}
    </div>
  )
}

function App() {
  const message = "This is message"

  return (
    <div className="App">
      <MsgContext.Provider value={message}>
        This is App.
        <A />
      </MsgContext.Provider>
      
    </div>
  );
}

export default App