import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "../client/components/login.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-cuhacking.ca.auth0.com"
      clientId="YzSh18Lom8DjHJ6KFRMhGqnBchDfKRP0"
      authorizationParams={{
        redirect_uri: `${window.location.origin}`,
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
