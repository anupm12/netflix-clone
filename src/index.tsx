import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.css";
import App from "./app";
import firebase from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <div className="text-white">
        <App />
      </div>
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
