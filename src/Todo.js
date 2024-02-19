// Todo.js
import React from "react";

const Todo = ({ todo, markComplete, deleteTodo }) => {
  return (
    <div style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <input
        type="checkbox"
        onChange={() => markComplete(todo.id)}
        checked={todo.completed}
      />
      {todo.title}
      <button style={deleteButtonStyle} onClick={() => deleteTodo(todo.id)}>
        x
      </button>
    </div>
  );
};

const deleteButtonStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  cursor: "pointer",
  padding: "5px 9px",
  float: "right",
};

export default Todo;
