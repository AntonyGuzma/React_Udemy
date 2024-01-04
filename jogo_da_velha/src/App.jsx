import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import Square from './components/Square'

function App() {
 
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Jogo Da Velha</h1>
      <Board/>
    </div>
  )
}

export default App
