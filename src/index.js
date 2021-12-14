import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.jsx';

import 'bootstrap/dist/css/bootstrap.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD-QBdlxBJOM8_Xz7Fthymg6klJvEsnA6g",
  authDomain: "mountainstopab1.firebaseapp.com",
  projectId: "mountainstopab1",
  storageBucket: "mountainstopab1.appspot.com",
  messagingSenderId: "53041095326",
  appId: "1:53041095326:web:f610e0267ae98ccba2518f"
};

initializeApp(firebaseConfig);


ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);

