import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";



class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <Navbar state={this.state} />

          <Switch>
            <Route exact path="/" component={Books} />
            <Route path="/books/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>

        </div>
      </Router >
    );
  }
}

export default App;
