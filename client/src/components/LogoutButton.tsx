// LogoutButton.tsx
import React from "react";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

const LogoutButton: React.FC = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <button
      className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
