


function App() {
  // const handleClick = () => {
  //   console.log("CLICKKKKKKK")
  // }
  const handleClick = (e) => {
    console.log("CLICKKKKKKK", e)
  }
  const selfDefinedClickhandler = (name) => {
    console.log(name)
  }
  const selfDefinedAndE = (name, e) => {
    console.log(name, e)
  }
  return (
    <div className="App">
      <button onClick={handleClick}>click me</button>
      <button onClick={() => selfDefinedClickhandler('iris')}>and me</button>
      <button onClick={(e) => selfDefinedAndE('iris', e)}>and me</button>
    </div>
  );
}

export default App;
