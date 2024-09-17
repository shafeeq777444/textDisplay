import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("")
function handle(e){
setName(e.target.value)
}
  return (
    <>
    <p>{name}</p>
     <input onChange={handle} value={name} />
    </>
  )
}

export default App
