import React from "react";
import "./App.css";
import TodoList from "./components/todo/TodoList";
import NavBar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <NavBar />
      <h1 className="text-3xl font-bold mb-6 text-center">
        Volunteer Opportunities
      </h1>
      <TodoList />
    </>
  );
}

export default App;
