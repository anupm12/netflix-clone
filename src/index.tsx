import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.css";
import App from "./app";
import firebase from "./lib/firebase.prod";

console.log(firebase);

ReactDOM.render(<App />, document.getElementById("root"));
