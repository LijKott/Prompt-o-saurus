import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.instagram.com/debuggingbros/" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61576001369417" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" className="logo" alt="Vite logo" />
        </a>
        <a href="https://x.com/DebuggingBros" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.youtube.com/@DebuggingBros" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" className="logo" alt="Vite logo" />
        </a>
        <a href="https://debuggingbros.itch.io/" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" className="logo" alt="Vite logo" />
        </a>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
