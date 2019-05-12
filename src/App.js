import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/home/Login";
import SignUp from "./pages/home/SignUp";
import Dashboard from "./pages/dashboard/AfterLogin";
import Poll from "./pages/dashboard/Polls";
import Participant from "./pages/dashboard/Participants";
import PollResult from "./pages/dashboard/Result";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/poll" component={Poll} />
            <Route path="/participants" component={Participant} />
            <Route path="/results" component={PollResult} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
