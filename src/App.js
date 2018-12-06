import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DateList from "./DateList";

const someDates = [
  "2018-12-01",
  "2018-12-4",
  "2018-12-23",
  "2018-12-18",
  "2018-12-8",
  "2018-12-19",
  "2018-12-27"
];

class App extends Component {
  render() {
    const dateAsListItems = someDates.map(dateString => {
      return <li>{dateString}</li>;
    });

    return (
      <div className="App">
        <div className="main-component">
          <button
            onClick={() => {
              console.log("ouch!");
            }}
            className="my-button"
          >
            go ahead, click me. i dare you
          </button>

          <DateList listOfDates={dateAsListItems} />
        </div>
      </div>
    );
  }
}

export default App;
