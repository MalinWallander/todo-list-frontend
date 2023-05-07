import { useState } from "react";

export default function NewTodoForm({ setTodos }) {
  const [newItem, setNewItem] = useState("");

  function addTodo(title) {
    (async () => {
      const rawResponse = await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: crypto.randomUUID(),
          title,
          completed: false,
        }),
      });

      await rawResponse.json().then((data) => {
        setTodos((currentTodos) => {
          return [...currentTodos, { data }];
        });
      });
    })();
  }

  function handleSubmit(e) {
    if (newItem === "") return;

    addTodo(newItem);

    setNewItem("");
  }

  return (
    <form action="text" className="newItemForm" onSubmit={handleSubmit}>
      <div className="form">
        <label htmlFor="input">New todo: </label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="input"
        />
      </div>
      <button className="btnAdd">Add</button>
    </form>
  );
}
