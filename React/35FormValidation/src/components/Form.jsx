import React, { useRef, useState } from 'react'

export default function ExpenseForm({ setExpenses }) {
  //All in one method
  const [expens, setExpens] = useState(
    {
      title: '',
      category: '',
      amount: ''
    }
  )

  // Show Error 
  const [Error, setError] = useState({});

  const validation = (FormData) => {

    const errorData = {}

    if (!FormData.title) {
      errorData.title = 'Please Enter a Title...'
    }

    if (!FormData.category) {
      errorData.category = 'Select a Category...'
    }

    if (!FormData.amount) {
      errorData.amount = 'Please enter Amount...'
    }

    setError(errorData);
    return errorData;

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResult = validation(expens);

    if (Object.keys(validateResult).length) return;

    setExpenses((prevState) => [...prevState, { ...expens, id: crypto.randomUUID() }]);

    setExpens({
      title: '',
      category: '',
      amount: ''
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setExpens((prevState) => ({
      ...prevState,
      [name]: e.target.value // dynamically update 
    }))
    setError({});
  }

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">

          <label htmlFor="title">Title</label>

          <input
            placeholder='Enter your item here...'
            id="title"
            name="title"
            value={expens.title}
            onChange={handleChange} // Alll in one method
          />
          <p className="error">{Error.title}</p>
        </div>

        <div className="input-container">
          <label htmlFor="category">Category</label>

          <select
            id="category"
            name="category"
            value={expens.category}
            onChange={handleChange}
          >
            <option value="" hidden>Select Category</option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option>
          </select>
          <p className="error">{Error.category}</p>
        </div>

        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            type='number'
            placeholder='Enter amount...'
            id="amount"
            name="amount"
            value={expens.amount}
            onChange={handleChange}
          />
          <p className="error">{Error.amount}</p>
        </div>

        <button className="add-btn">Add</button>

      </form>

    </>
  )
}