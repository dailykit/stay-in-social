import React, { useState } from "react";
import { Header, Main, Footer } from "./sections";
// import { Backdrop } from "./components";
import "./global.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
