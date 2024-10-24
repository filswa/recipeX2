import './App.css'
import { useEffect, useState } from 'react'
import Home from './pages/Home/Home'

function App() {
  const [text, setText] = useState("")

  useEffect(()=>{
    fetch("http://localhost:3000")
    .then(response => response.json())
    .then(data => setTimeout(() => setText(data.message), 3000))
    .catch(error => console.log(error))
  })
  return (
      <Home>{text ? text : "Loading..."}</Home>
  )
}

export default App
