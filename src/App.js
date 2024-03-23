
const count = 100
const list = [
  {id: 1001, name: 'Vue'},
  {id: 1002, name: 'React'},
  {id: 1003, name: 'Angular'},
]

function getName() {
  return 'iris'
}

function App() {
  return (
    <div className="App">
      this is app
      <ul>
        {list.map( item => <li key={item.id}>{item.name}</li> )}
      </ul>
    </div>
  );
}

export default App;
