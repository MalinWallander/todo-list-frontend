import "./App.css";

import { useState, useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, [setTodos]);

  return (
    <>
      <h1>MY TODO-LIST</h1>
      <NewTodoForm setTodos={setTodos} />
      <h2>TODOS:</h2>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
