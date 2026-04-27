
import React, { useRef, useState } from 'react'

export default function ExpenseForm({ setExpenses }) {

  const [expens, setExpens] = useState({
    title: '',
    category: '',
    amount: ''
  })

  // create ref for title input
  const titleRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    setExpenses((prevState) => [
      ...prevState,
      { ...expens, id: crypto.randomUUID() }
    ])

    setExpens({
      title: '',
      category: '',
      amount: ''
    })

    // focus title input after submit
    titleRef.current.focus()
  }

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>

        <div className="input-container">
          <label htmlFor="title">Title</label>

          <input
            ref={titleRef}
            placeholder="Enter your item here..."
            id="title"
            name="title"
            value={expens.title}
            onChange={(e) =>
              setExpens((prevState) => ({
                ...prevState,
                title: e.target.value
              }))
            }
          />
        </div>

        <div className="input-container">
          <label htmlFor="category">Category</label>

          <select
            id="category"
            name="category"
            value={expens.category}
            onChange={(e) =>
              setExpens((prevState) => ({
                ...prevState,
                category: e.target.value
              }))
            }
          >
            <option value="" hidden>Select Category</option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option>
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="amount">Amount</label>

          <input
            type="number"
            placeholder="Enter amount..."
            id="amount"
            name="amount"
            value={expens.amount}
            onChange={(e) =>
              setExpens((prevState) => ({
                ...prevState,
                amount: e.target.value
              }))
            }
          />
        </div>

        <button className="add-btn">Add</button>

      </form>
    </>
  )
}




// import React, { useRef, useState } from 'react'

// export default function ExpenseForm({ setExpenses }) {

//   // const [title, setTitle] = useState(''); // For input title
//   // const [category, setCatogery] = useState(''); // For select category
//   // const [amount, setAmount] = useState(''); // For Amount

//   //All in one method
//   const [expens, setExpens] = useState(
//     {
//       title: '',
//       category: '',
//       amount: ''
//     }
//   )

//   const myRef = useRef(0);  // when we update useRef our component is not rendered

//   console.log(myRef); // for information


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(expens);

//     // const Expense = { title, category, amount, id: crypto.randomUUID };
//     // setExpenses((prevState) => [...prevState, Expense]);
//     // e.target.reset()// it's not work
//     // setTitle('');
//     // setAmount('');
//     // setCatogery('');
//     // console.log({ title, category, amount });
//     // const expense = { ...getFormData(e.target), id: crypto.randomUUID() }

//     setExpenses((prevState) => [...prevState, { ...expens, id: crypto.randomUUID() }]);
//     setExpens({
//       title: '',
//       category: '',
//       amount: ''
//     })
//     // e.target.reset()
//   }

//   // const getFormData = (form) => {
//   //   const formData = new FormData(form)
//   //   const data = {}
//   //   for (const [key, value] of formData.entries()) {
//   //     data[key] = value
//   //   }
//   //   return data
//   // }
//   // console.log("Rendering........."); // For information

//   return (
//     <>
//       <button
//         onClick={() => {
//           myRef.current = myRef.current + 1

//           console.log(myRef);
//         }}
//         ref={myRef}
//       >Click</button>

//       {/* <h2>MyRef = {myRef.current}, M  yNum = {myNum}</h2> */}

//       <form className="expense-form" onSubmit={handleSubmit}>
//         <div className="input-container">

//           <label htmlFor="title">Title</label>

//           <input
//             placeholder='Enter your item here...'
//             id="title"
//             name="title"
//             // value={title}
//             value={expens.title}
//             // onChange={(e) => setTitle(e.target.value)} // without this we can not type anything in input field.
//             onChange={(e) => setExpens((prevState) => ({ ...prevState, title: e.target.value }))} // Alll in one method
//           />
//         </div>

//         <div className="input-container">
//           <label htmlFor="category">Category</label>

//           <select
//             id="category"
//             name="category"
//             // value={category}
//             value={expens.category}
//             // onChange={(e) => setCatogery(e.target.value)} // without this we can not select category.
//             onChange={(e) => setExpens((prevState) => ({ ...prevState, category: e.target.value }))}
//           >
//             <option value="" hidden>Select Category</option>
//             <option value="Grocery">Grocery</option>
//             <option value="Clothes">Clothes</option>
//             <option value="Bills">Bills</option>
//             <option value="Education">Education</option>
//             <option value="Medicine">Medicine</option>
//           </select>
//         </div>

//         <div className="input-container">
//           <label htmlFor="amount">Amount</label>
//           <input
//             type='number'
//             placeholder='Enter amount...'
//             id="amount"
//             name="amount"
//             // value={amount}
//             value={expens.amount}
//             // onChange={(e) => setAmount(e.target.value)} // without this we can not add Amount.
//             onChange={(e) => setExpens((prevState) => ({ ...prevState, amount: e.target.value }))}
//           />
//         </div>

//         <button className="add-btn">Add</button>

//       </form>

//     </>
//   )
// }

