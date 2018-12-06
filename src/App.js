import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-component">
          <button className="my-button">go ahead, click me. i dare you</button>
          <ul className="date-list">
            <li>Date 1</li>
            <li>Date 2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
