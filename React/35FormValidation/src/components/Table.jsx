import React from 'react'

export default function Table({ expenses }) {

  const total = expenses.reduce((sum, item) => sum + Number(item.amount), 0);

  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>
            <select>
              <option value="">All</option>
              <option value="grocery">Grocery</option>
              <option value="clothes">Clothes</option>
              <option value="bills">Bills</option>
              <option value="education">Education</option>
              <option value="medicine">Medicine</option>
            </select>
          </th>
          <th className="amount-column">
            <div>
              <span>Amount</span>
            </div>
          </th>
        </tr>
      </thead>

      <tbody>

        {expenses.map(({ id, title, category, amount }) => (
          <tr key={id}>
            <td>{title}</td>
            <td>{category}</td>
            <td>₹{amount}</td>
          </tr>
        ))}

        <tr>
          <th>Total</th>
          <th></th>
          <th>₹{total}</th>
        </tr>

      </tbody>
    </table>
  )
}