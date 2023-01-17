import './App.css';

const App = () => {
  const name = 'John';
  const isNameShowing = false;

  return (
    <div className="App">
      <p>Hello, { isNameShowing ? name : 'beautiful people of the world' }!</p>
    </div>
  );
}

export default App;
