import './App.css';

const App = () => {
  const name = 'John';
  // const name = null;

  return (
    <div className="App">
      <h1>{ 2 + 3 }</h1>
      { name ? (
        <>                 {/* react fragment  - required for wrapping jsx code */}
          {name}
        </>
      ) : (
        <>
          <h1>There is no name for now!</h1>
          <h2>Please move on to next...</h2>
        </>
      ) }
    </div>
  );
}

export default App;
