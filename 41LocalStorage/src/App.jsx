import { useState, useEffect } from "react";

function App() {

  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Save theme to local storage 
  useEffect(() => {
    localStorage.setItem("theme", theme)
  })

  const addTodo = () => {  // Add new Task
    setTodos([...todos, "New Task"]);
  };


  const clearData = () => {  // clear all task & set initial value 
    setTodos([]);
  };


  const toggleTheme = () => {
    setTheme (prev => (prev === 'light' ? 'dark' : 'light') )
  }

  return (
    <div>

      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo, i) => (
        <p key={i}>{todo}</p>
      ))}

      <button onClick={clearData}>clear </button>
      <button onClick={toggleTheme}>Change Theme </button>

    </div>
  );
}

export default App;