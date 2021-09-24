import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./sass/app.scss";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
//Inicación de firebase
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBvM5i09B_UQoHqE2fcUNVn9t9htisphr4",
  authDomain: "tench-arg.firebaseapp.com",
  projectId: "tench-arg",
  storageBucket: "tench-arg.appspot.com",
  messagingSenderId: "388159337238",
  appId: "1:388159337238:web:2d9431aa61d31ff44dd637",
  measurementId: "G-TME7LQNXMX",
});

const app = initializeApp(firebaseApp);
const analytics = getAnalytics();
