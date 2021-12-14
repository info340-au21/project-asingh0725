import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.jsx';

import 'bootstrap/dist/css/bootstrap.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-77yk0D7Xm8aRvVIoMBfnITmMiFU3os4",
  authDomain: "mountainstop-6cc61.firebaseapp.com",
  projectId: "mountainstop-6cc61",
  storageBucket: "mountainstop-6cc61.appspot.com",
  messagingSenderId: "998570659454",
  appId: "1:998570659454:web:87580d193d462d2082122f",
  measurementId: "G-44QG2HVB5H"
};

initializeApp(firebaseConfig);


ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);

