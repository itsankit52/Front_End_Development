import { useState } from 'react'
import './App.css'
import { Counter } from './components/Counter'
import ClassCounter from './components/ClassCounter'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter name="Counter using Functional" /> */}
      <ClassCounter name="Counter using Class Components" />
    </>
  )
}

export default App
