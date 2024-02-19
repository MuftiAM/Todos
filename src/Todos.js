// Todos.js
import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, markComplete, deleteTodo }) => {
  return todos.map((todo) => (
    <Todo
      key={todo.id}
      todo={todo}
      markComplete={markComplete}
      deleteTodo={deleteTodo}
    />
  ));
};

export default Todos;
