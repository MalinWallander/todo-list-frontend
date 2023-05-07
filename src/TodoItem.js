import { useState } from "react";

export function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
  editTodo,
}) {
  const [editedItem, setEditedItem] = useState("");
  const [showEdit, setShowEdit] = useState(false);

  function handleEdit(e) {
    if (editedItem !== "") {
      editTodo(editedItem, id);
    }
  }

  function toggleEdit(e) {
    setShowEdit(!showEdit);
  }
  return (
    <li className="item">
      <div className="todoItem">
        <label className="titleTodo">
          <input
            className="checkbox"
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} className="btnDelete">
          Delete
        </button>
        <button className="btnEdit" onClick={toggleEdit}>
          Edit
        </button>
      </div>
      {showEdit && (
        <div className="editSection">
          <input
            className="editInput"
            type="text"
            defaultValue={title}
            onChange={(e) => setEditedItem(e.target.value)}
          />
          <button
            className="btnDone"
            onClick={() => {
              toggleEdit();
              handleEdit();
            }}
          >
            Done
          </button>
        </div>
      )}
    </li>
  );
}
