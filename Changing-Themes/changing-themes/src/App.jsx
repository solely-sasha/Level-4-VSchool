import React from "react";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <Navbar />
        </div>
        <div className="main">
          <Main />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
