import { useState } from "react";
import './App.css'

function App() {

  const [initialUsers] = useState([
    { id: 1, name: "Ankit", age: 22 },
    { id: 2, name: "Piyush", age: 20 },
    { id: 3, name: "Raju", age: 25 },
    { id: 4, name: "Bam", age: 21 }
  ]);


  const [order, setOrder] = useState("ASC");
  // const [clearsort, setClearsort] = useState(() => {});
  const [users, setUsers] = useState(initialUsers);


  const clearSort = () => {
    setUsers(initialUsers);   // reset to original data
    setOrder("ASC");          // reset order
  };

  const sortByAge = () => {

    const sorted = [...users].sort((a, b) => {
      if (order === "ASC") {
        return a.age - b.age;
      } else {
        return b.age - a.age;
      }
    });

    setUsers(sorted);
    setOrder(order === "ASC" ? "DESC" : "ASC");
  };

  return (
    <>
      <div className="t-body">
        <h2>Sortable Table</h2>

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th className="id-name">ID</th>
              <th className="id-name">Name</th>
              <th className="btn" onClick={sortByAge} >
                Sort ⇕
              </th>

            </tr>
          </thead>


          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>

        </table>
        <th className="btn-clear" onClick={clearSort}>
          Clear
        </th>

      </div>
    </>
  );
}

export default App;