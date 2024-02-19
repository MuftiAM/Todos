// App.js
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

const App = () => {
  const [todos, setTodos] = useState([]);

  const markComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const addTodo = (title) => {
    const newTodo = {
      id: Math.random(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        markComplete={markComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
