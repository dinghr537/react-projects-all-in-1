
const isLogin = false

function getName() {
  return 'iris'
}

function App() {
  return (
    <div className="App">
      {/* this is app */}
      {isLogin && <span>this is span</span>}
      {isLogin ? <span>this is span</span> : <span>loading...</span>}
    </div>
  );
}

export default App;
