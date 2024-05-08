import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Rendu du composant racine de l'application */}
  </React.StrictMode>,
  document.getElementById("root"),
);
