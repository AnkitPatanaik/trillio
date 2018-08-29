import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router basename={"/"}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  )
};

export default App;
