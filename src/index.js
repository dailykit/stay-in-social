import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";
import { AuthProvider, DataProvider } from "./Providers";

ReactDOM.render(
  // <AuthProvider>
  <DataProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </DataProvider>,
  // </AuthProvider>,
  document.getElementById("root")
);
