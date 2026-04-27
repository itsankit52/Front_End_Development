import { useState } from "react";
import './App.css'

function App() {

  const [initialUsers] = useState([
    { id: 2, name: "Ankit", age: 22 },
    { id: 1, name: "Piyush", age: 20 },
    { id: 4, name: "Raju", age: 25 },
    { id: 3, name: "Bam", age: 21 }
  ]);


  const [order, setOrder] = useState("ASC");
  // const [clearsort, setClearsort] = useState(() => {});
  const [users, setUsers] = useState(initialUsers);


  const clearSort = () => {
    setUsers(initialUsers);   // reset to original data
    setOrder("ASC");          // reset order
  };

  const sortById = () => {

    const sorted = [...users].sort((a, b) => {
      if (order === "ASC") {
        return a.id - b.id;   // ascending by id
      } else {
        return b.id - a.id;   // descending by id
      }
    });

    setUsers(sorted);
    setOrder(order === "ASC" ? "DESC" : "ASC");
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


  const sortByName = () => {
    const sorted = [...users].sort((a, b) => {
      if (order === "ASC") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
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
              <th className="btn" onClick={sortById}>Sort By Id ⇕</th>
              <th className="btn" onClick={sortByName}>Sort By Name ⇕</th>
              <th className="btn" onClick={sortByAge} >
                Sort By Age ⇕
              </th>
            </tr>


          </thead>


          <tbody className="list">
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>

        </table>
        <button className="btn-clear" onClick={clearSort}>Clear</button>

      </div>
    </>
  );
}

export default App;