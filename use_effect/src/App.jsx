import { useEffect, useState } from 'react'
import './App.css'

function App() {


   
  let [count,setcount] = useState(0);
   
  function inc(){

    setcount(count++)
  }

  function dec(){

    setcount(count--)
  }

  useEffect(()=>{

    alert("useeeffect")
  })

  useEffect(()=>{

    alert("Hello my useeeffect")
  },[])

  useEffect(()=>{

    alert("Hello i am count useeffect")
  },[count])

  return (
    <>
      
      <button onClick={inc}>+</button>
      <span>{count}</span>
      <button onClick={dec}>-</button>
     
    </>
  )
}

export default App
