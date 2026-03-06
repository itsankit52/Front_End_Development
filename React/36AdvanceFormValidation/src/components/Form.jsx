import React, { useRef, useState } from 'react'
import Input from './input';
import SelectMenu from './SelectMenu';

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

        <Input
          label="Title"
          id="title"
          name="title"
          value={expens.title}
          onChange={handleChange}
          error={Error.title}
          placeholder="Enter your title..." />

        <SelectMenu
          options={['Grocery', 'Clothes', 'Bills', 'Education', 'Medicine']}
          label="Category"
          id="category"
          name="category"
          defaultOption="Select Category"
          value={expens.category}
          onChange={handleChange}
          error={Error.category}
          category />

        <Input label="Amount"
          id="amount"
          name="amount"
          value={expens.amount}
          onChange={handleChange}
          error={Error.amount}
          placeholder="Enter Amount" />

        <button className="add-btn">Add</button>

      </form>

    </>
  )
}