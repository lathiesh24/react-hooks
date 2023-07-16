import './App.css';
import { useState } from 'react';

function App() {
  const [Input, Output] = useState("Lathiesh");
 
  const ChangingInput = (item)=>{
       const newValue = item.target.value;
       Output(newValue);
  }

  return (
    <div className="App">
      <div>
        <input placeholder='Type something' onChange={ChangingInput}/>
        {Input}
      </div>
    </div>
  );
}

export default App;
