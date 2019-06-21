import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import ProjectDetails from "./components/projects/ProjectDetails";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
