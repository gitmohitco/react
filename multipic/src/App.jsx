import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Image from './Image'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Image />
      <Image />
      <Image />
      <Image />
    </>
  )
}

export default App
