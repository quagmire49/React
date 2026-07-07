import React from 'react'
import "./App.css"
import { data } from './context/UserContext'
import { useContext } from 'react'
function App() {
  let name=useContext(data);
  return (
    <div>{name}</div>
  )
}

export default App