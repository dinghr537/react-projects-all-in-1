import { useState } from 'react'

// import _ from 'lodash'
// import classNames from 'classnames'


function App() {
  const [value, setValue] = useState('')

  return (
    <div className="App">
      <input 
      value={value}
      onChange={(e)=>setValue(e.target.value)}/>
    </div>
  );
}

export default App