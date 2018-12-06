import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const someDates = ["2018-12-01", "2018-12-4"];

class App extends Component {
  render() {
    const dateAsListItems = someDates.map(dateString => {
      return <li>{dateString}</li>;
    });

    return (
      <div className="App">
        <div className="main-component">
          <button className="my-button">go ahead, click me. i dare you</button>
          <ul className="date-list">{dateAsListItems}</ul>
        </div>
      </div>
    );
  }
}

export default App;
