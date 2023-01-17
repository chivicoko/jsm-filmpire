import { useEffect, useState } from 'react';
import './App.css';


const App = () => {

  const [counter, setCounter] = useState(0);   /* using array disrupturing ([counter,  setCounter]) and useState hook for react state */

  useEffect(() => {
    setCounter(100);  
  }, []);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{ counter }</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
