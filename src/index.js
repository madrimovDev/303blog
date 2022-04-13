import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MyContextProvider from "./context/MyContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyContextProvider>
        <App />
      </MyContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)