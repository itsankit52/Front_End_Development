import React, { useRef, useState } from 'react'
import Input from './input';
import SelectMenu from './SelectMenu';

export default function ExpenseForm({ setExpenses }) {
  //All in one method
  const [expens, setExpens] = useState(
    {
      title: '',
      category: '',
      amount: '',
      email: ''
    }
  )

  // Show Error 
  const [Error, setError] = useState({});

  const configuration = {
    title: [{ required: true, message: 'Please Enter title' }, { minLength: 4, message: 'Title should be at least 4 characters long' }],
    category: [{ required: true, message: 'Please Select a category' }],
    amount: [{ required: true, message: 'Please Enter amount' }],
    email: [{ required: true, message: 'Please Enter Email' }]
  }
  const validation = (FormData) => {

    const errorData = {}

    Object.entries(FormData).forEach(([key, value]) => {
      configuration[key].some((rule) => {
        if (rule.required && !value) {
          errorData[key] = rule.message;
          return true;
        }

        // this is for title length 
        if (rule.minLength && value.length < 4) {
          errorData[key] = rule.message;
          return true;
        }


      });
    })

    // if (!FormData.title) {
    //   errorData.title = 'Please Enter a Title...'
    // }

    // if (!FormData.category) {
    //   errorData.category = 'Select a Category...'
    // }

    // if (!FormData.amount) {
    //   errorData.amount = 'Please Enter Amount...'
    // }

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

        {/* <Input label="Email"
          id="email"
          name="email"
          value={expens.email}
          onChange={handleChange}
          error={Error.email}
          placeholder="Enter email" /> */}

        <button className="add-btn">Add</button>

      </form>

    </>
  )
}