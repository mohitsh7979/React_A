import { useState } from "react";
import "./App.css";

function App() {



  let [counter,setcounter] = useState(0);

  function increment(){

     console.log(counter)
     setcounter(counter++);
  }

  function decrement(){

    console.log(counter)
    setcounter(counter--);
  }
  return (
    <>
      <div className="box">
        <button onClick={increment}>+</button>
        <span>{counter}</span>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
}

export default App;
