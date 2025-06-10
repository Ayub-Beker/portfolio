import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Main from './components/main'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Main/>
      <About/>
  
    </>
  )
}

export default App
