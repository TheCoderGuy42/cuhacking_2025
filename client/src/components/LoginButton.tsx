// LoginButton.tsx
import React from "react";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const LoginButton: React.FC = () => {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      onClick={handleLogin}
    >
      Sign in
    </button>
  );
};

export default LoginButton;
