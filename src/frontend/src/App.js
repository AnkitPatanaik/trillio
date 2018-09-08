import React from "react";
import { Provider } from 'react-redux'
import "../node_modules/bulma/css/bulma.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import configureStore from './configureStore'

const store = configureStore();

const App = () => {
  return (
    <Provider store = {store}>
      <Router basename={"/"}>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
