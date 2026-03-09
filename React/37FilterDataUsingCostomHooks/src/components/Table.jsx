import React, { useState } from "react";
import ContextMenu from "./ContextMenu";

export default function Table({ expenses, setExpens, setExpenses }) {

  const [category, setCategory] = useState("");
  const [menuPosition, setMenuPosition] = useState(null);
  const [rowId, setRowId] = useState(null);

  const filteredData = expenses.filter((expense) =>
    expense.category.toLowerCase().includes(category)
  );

  const total = filteredData.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  return (
    <>
      {menuPosition && (
        <ContextMenu
          menuPosition={menuPosition}
          rowId={rowId}
          setExpenses={setExpenses}
          setMenuPosition={setMenuPosition}
          setExpens={setExpens}
        />
      )}

      <table
        className="expense-table"
        onClick={() => setMenuPosition(null)}
      >
        <thead>
          <tr>
            <th>Title</th>

            <th>
              <select
                onChange={(e) =>
                  setCategory(e.target.value.toLowerCase())
                }
              >
                <option value="">All</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select>
            </th>

            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map(({ id, title, category, amount }) => (
            <tr
              key={id}
              onContextMenu={(e) => {
                e.preventDefault();

                setMenuPosition({
                  left: e.clientX,
                  top: e.clientY
                });

                setRowId(id);
              }}
            >
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
    </>
  );
}