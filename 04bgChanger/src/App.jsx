import { useState } from "react"

function App() {
  const [color, SetColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={()=>SetColor("red")}
          className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor:"red"}}>
            Red
          </button>
      
          <button
          onClick={()=>SetColor("deepskyblue")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor:"deepskyblue" }}
          >Blue</button>
          <button
          onClick={()=>SetColor("green")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor:"green" }}
          >Green</button>
          <button
          onClick={()=>SetColor("orange")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor:"orange "}}
          >Orange</button>
          <button
          onClick={()=>SetColor("yellow")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor:"yellow" }}
          >Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
