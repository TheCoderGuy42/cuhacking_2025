import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/todo/TodoList";
import NavBar from "./components/navbar/navbar";

function App() {
  // Filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [maxTime, setMaxTime] = useState(240); // in minutes

  return (
    <>
      <NavBar
        onSearch={setSearchTerm}
        onLocationChange={setLocationFilter}
        onMaxTimeChange={setMaxTime}
      />
      <h1 className="m-10 text-3xl font-bold mb-6 text-center">
        Volunteer Opportunities
      </h1>
      <TodoList
        searchTerm={searchTerm}
        locationFilter={locationFilter}
        maxTime={maxTime}
      />
    </>
  );
}

export default App;
