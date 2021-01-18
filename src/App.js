import './App.css';
import React, {useState, useEffect} from 'react';
function App() {
  const [count, setCount] = useState(0) 
  useEffect(()=>{
    console.log("1")
    const eventHandler = ()=>console.log("hi")
    document.addEventListener("click", eventHandler)
   const clearIntervalId = setInterval(()=>{
     console.log("hi")
    },2000)
    return ()=>{
     console.log("2")
     document.removeEventListener("click", eventHandler)
      console.log(count)
      clearInterval(clearIntervalId)

    }
  },[count])
  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  );
}

export default App;
