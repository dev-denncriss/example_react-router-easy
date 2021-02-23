import React from "react";
import "./App.css";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import About from "./views/About";
import Store from "./views/Store";
import Home from "./views/Home";
import NavigationBar from "./components/NavigationBar";
import FAQ from "./views/FAQ";

const App = () => {
  return (
    <div className="app">
      <Router>
        <header>
          <NavigationBar />
        </header>
        <div className="container">
          <Switch>
            <Route path="/store">
              <Store />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/faq">
              <FAQ />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
