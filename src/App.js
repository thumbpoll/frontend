import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/home/Login";
import SignUp from "./pages/home/SignUp";
import Dashboard from "./pages/dashboard/AfterLogin";
import Poll from "./pages/dashboard/Polls";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/poll" component={Poll} />
        </Switch>
      </Router>
    );
  }
}

export default App;
