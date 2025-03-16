import React, { useState, useEffect } from "react";
import "../client/App.css";
import LoginButton from "../client/src/components/LoginButton";
import LogoutButton from "../client/src/components/LogoutButton";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../client/src/components/firebase";

interface cardProp {
  title: string;
  orginization: string;
  orginizationTypes: string;
  volunteerTypes: string;
  duration: string;
  applicationDeadline: string;
  website: string;
}

const TodoPost = ({
  title,
  orginization,
  orginizationTypes,
  volunteerTypes,
  duration,
  applicationDeadline,
  website,
}: cardProp) => {
  return (
    <>
      <div className="w-full border rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 bg-card">
        <div className="flex flex-col space-y-3">
          <h2 className="text-2xl font-bold text-primary">{title}</h2>
          <p className="text-sm text-muted-foreground">{orginization}</p>
          <div className="mt-2">
            <p className="text-base leading-relaxed break-words whitespace-normal overflow-wrap-normal">
              {orginizationTypes}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

function App() {
  const [Todo, setTodo] = useState("");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {!user ? <LoginButton /> : <LogoutButton />}
      {user ? (
        <div>
          Name: {user.displayName} <br />
          Email: {user.email} <br />
          <img src={user.photoURL?.toString()} alt="" />
        </div>
      ) : (
        ""
      )}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TodoPost
            title="Testing1"
            orginization="Testing2"
            orginizationTypes="Testing3"
            volunteerTypes="Testing4"
            duration="testing5"
            applicationDeadline="testing6"
            website="testing7"
          />
        </div>
      </div>
    </>
  );
}

export default App;
