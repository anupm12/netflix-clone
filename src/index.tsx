import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.css";
import App from "./app";
import firebase from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
