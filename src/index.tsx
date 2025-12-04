import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

import "bootstrap/dist/css/bootstrap.css";

// Firebase
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD-QBdlxBJOM8_Xz7Fthymg6klJvEsnA6g",
  authDomain: "mountainstopab1.firebaseapp.com",
  projectId: "mountainstopab1",
  storageBucket: "mountainstopab1.appspot.com",
  messagingSenderId: "53041095326",
  appId: "1:53041095326:web:f610e0267ae98ccba2518f",
};

initializeApp(firebaseConfig);

// React 18 root API
const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

