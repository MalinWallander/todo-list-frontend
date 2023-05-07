import { TodoItem } from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
  function editTodo(title, id) {
    (async () => {
      await fetch(`http://localhost:3000/todo/${id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "bananahammock",
        },
        body: JSON.stringify({
          title: title,
        }),
      });
    })();

    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title };
        }

        return todo;
      });
    });
  }

  function toggleTodo(id, completed) {
    (async () => {
      await fetch(`http://localhost:3000/todo/${id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "bananahammock",
        },
        body: JSON.stringify({
          completed: completed,
        }),
      });
    })();

    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    (async () => {
      await fetch(`http://localhost:3000/todo/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: "bananahammock",
        },
      });
    })();

    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <ul className="todoList">
      {todos.length === 0 && "No todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
    </ul>
  );
}
