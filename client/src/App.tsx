import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TodoList from "./components/todo/TodoList";
import NavBar from "./components/navbar/navbar";
import RedeemPage from "./components/redeem/RedeemPage";

function Title() {
  return (
    <h1 className="m-10 text-3xl font-bold mb-6 text-center">
      Volunteer Opportunities
    </h1>
  );
}
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [maxTime, setMaxTime] = useState(240); // in minutes

  return (
    <Router>
      <NavBar
        onSearch={setSearchTerm}
        onLocationChange={setLocationFilter}
        onMaxTimeChange={setMaxTime}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Title />
              <TodoList
                searchTerm={searchTerm}
                locationFilter={locationFilter}
                maxTime={maxTime}
              />
            </>
          }
        />
        <Route path="/redeem" element={<RedeemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
