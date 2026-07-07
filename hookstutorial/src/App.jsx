import React, { useState } from 'react'
import "./App.css"
function App() {
  let[color,setcolor]=useState("blue");
  return (
    <>
    <h1>My fav color is {color}</h1>
    <button onClick={()=>setcolor("black")}>black</button>
    </>
  )
}

export default App