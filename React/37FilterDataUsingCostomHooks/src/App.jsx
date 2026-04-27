
import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Table from './components/Table'
import Data from './Data'

function App() {
  const [expens, setExpens] = useState(
    {
      title: '',
      category: '',
      amount: ''
    }
  )
  const [expenses, setExpenses] = useState(Data)

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <Form
          setExpenses={setExpenses}
          expens={expens}
          setExpens={setExpens}
        />
        <Table
          expenses={expenses}
          setExpens={setExpens}
          setExpenses={setExpenses}
        />
      </div>
    </main>
  )
}

export default App
