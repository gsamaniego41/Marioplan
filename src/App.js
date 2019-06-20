import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <h1>Marioplan</h1>
      </div>
    </Router>
  );
}

export default App;
