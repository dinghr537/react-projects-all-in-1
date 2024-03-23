import { useRef, useState } from 'react'

// import _ from 'lodash'
// import classNames from 'classnames'

function Son({onGetSonMessage}) {
  const message = 'message from the son'
  return (
    <div>
      <div>this is the son</div>
      <button onClick={()=>onGetSonMessage(message)}>click</button>
    </div>
  )
}

function App() {
  const [value, setValue] = useState('god')

  const getMessage = (message) => {
    console.log(message)
    setValue(message)
  }



  return (
    <div className="App">
      this is the {value}
      <Son onGetSonMessage={getMessage} />
    </div>
  );
}

export default App