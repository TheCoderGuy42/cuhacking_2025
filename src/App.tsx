import React, { useState } from "react";
import "../client/App.css";

interface cardProp {
  title: string;
  orginization: string;
  orginizationTypes: string;
  volunteerTypes: string;
  commitment: string;
  location: string;
  applicationDeadline: string;
  website: string;
}

const TodoPost = ({
  title,
  orginization,
  orginizationTypes,
  volunteerTypes,
  commitment,
  location,
  applicationDeadline,
  website,
}: cardProp) => {
  return (
    <>
      <div className="border rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 bg-card">
        <div className="flex flex-col space-y-3">
          <h2 className="text-2xl font-bold text-primary">{title}</h2>
          <p className="text-sm text-muted-foreground">
            <strong>Company</strong>: {orginization}
          </p>
          <div className="mt-2">
            <p className="text-base leading-relaxed break-words whitespace-normal overflow-wrap-normal line-clamp-1">
              <strong>Orginization Types</strong>: {orginizationTypes}
            </p>
            <p className="text-base leading-relaxed break-words whitespace-normal overflow-wrap-normal line-clamp-1">
              <strong>Volunteer Types</strong>: {volunteerTypes}
            </p>
            <p className="text-base leading-relaxed break-words whitespace-normal overflow-wrap-normal line-clamp-1">
              <strong>Commitment</strong>: {commitment}
            </p>
            <p className="text-base leading-relaxed break-words whitespace-normal overflow-wrap-normal line-clamp-1">
              <strong>Location</strong>: {location}
            </p>{" "}
            <p className="text-base leading-relaxed break-words whitespace-normal overflow-wrap-normal line-clamp-1">
              <strong>Application Deadline</strong>: {applicationDeadline}
            </p>{" "}
            <p className="text-base leading-relaxed break-words whitespace-normal overflow-wrap-normal line-clamp-1">
              <strong>Website</strong>: {website}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

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
