import React, { useState } from "react";
import "./App.css";
import TodoPost from "./components/TodoPost.tsx";

function App() {
  const [Todo, setTodo] = useState("");
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TodoPost
            title="Web Developer & Research Assistant"
            orginization="@ Spill The Code"
            orginizationTypes="Education, Children, Youth and Family"
            volunteerTypes="Arts, Crafts and Photography, Communications and Marketing"
            commitment="Short term (less than 6 months)"
            location="Ottawa - West"
            applicationDeadline="April 30, 2025"
            website="TO BE DETERMINED"
          />
          <TodoPost
            title="Testing1"
            orginization="Testing2"
            orginizationTypes="Testing3"
            volunteerTypes="Testing4"
            commitment="testing5"
            location=""
            applicationDeadline="testing6"
            website="testing7"
          />
          <TodoPost
            title="Testing1"
            orginization="Testing2"
            orginizationTypes="Testing3"
            volunteerTypes="Testing4"
            commitment="testing5"
            location=""
            applicationDeadline="testing6"
            website="testing7"
          />
        </div>
      </div>
    </>
  );
}

export default App;
