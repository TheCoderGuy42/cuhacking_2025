import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [Todo, setTodo] = useState("");
  return (
    <>
      <TodoList />
    </>
  );
}

export default App;
