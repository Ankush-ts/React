import { useState } from "react";


function App() {
  // let counter=4;
  
  let [counter,setCounter]=useState(0);
  let addValue=(()=>{
    setCounter(counter+1);
  })
  let removeValue=(()=>{
    setCounter(prevCounter => Math.max(0, prevCounter - 1));
  })

  return (
    
    <div>
      <h1>Hello World</h1>
      <h2>Counter value:{counter} </h2>
      <button onClick={addValue}>Increnment</button>
      <br/>
      <button onClick={removeValue}>Decrement</button>
    </div>
  )
}

export default App
