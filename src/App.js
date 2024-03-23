
const articalType = 3 // 0 1 3: 无图，单图，三图


function getArticaltemplate() {
  if (articalType == 0) {
    return <div>无图文章</div>
  } else if (articalType == 1) {
    return <div>单图文章</div>
  } else {
    return <div>三图文章</div> 
  }
}

function App() {
  return (
    <div className="App">
      {/* this is app */}
      {getArticaltemplate()}
    </div>
  );
}

export default App;
