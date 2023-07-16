import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(1);
 
  const incrementFunction = ()=>{
      setCounter(
        counter + 1
      )
  }

  const decrementFunction = ()=>{
    setCounter(counter -1 )
  }

  return (
    <div className="App">
      <div>
        <button onClick={decrementFunction}>Decrement</button>
        {counter}
         <button onClick={incrementFunction}>Increment</button>
      </div>
    </div>
  );
}

export default App;
