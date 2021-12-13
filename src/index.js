import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.jsx';

import 'bootstrap/dist/css/bootstrap.css';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcUQQcMQjpYDRYPKZm3yRUQje5gVl7O4w",
  authDomain: "info340-ab1-mountainstop.firebaseapp.com",
  projectId: "info340-ab1-mountainstop",
  storageBucket: "info340-ab1-mountainstop.appspot.com",
  messagingSenderId: "510942775974",
  appId: "1:510942775974:web:40474cd163fe3c87eec267",
  measurementId: "G-Y784N1EC7M"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);

