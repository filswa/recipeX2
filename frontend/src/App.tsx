import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [text, setText] = useState("")

  useEffect(()=>{
    fetch("http://localhost:3000")
    .then(response => response.json())
    .then(data => setTimeout(() => setText(data.message), 3000))
    .catch(error => console.log(error))
  })
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          {text ? text : `Edit <code>src/App.tsx</code> and save to test HMR`}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
