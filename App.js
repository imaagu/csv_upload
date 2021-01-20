import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/index";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid  ">
        <MainPage />
      </div>
    );
  }
}

export default App;
