import React, { Component } from 'react';
import './App.css';
import Chart from "./components/Chart/Chart";
import Example from './components/Navbar/navbar';
import LineChart from "./components/Chart/lineChart";
class App extends Component {
  render() {
    return (
      <div className="App">
      <Example/>
      <h1> Utility Data </h1>
      <p> A nodejs and react demonstration by Tyler Whidden </p>
      <p id="large"> Below are several visual representations of data gathered from a utility bill </p>
      <Chart/>
      <LineChart/>
      </div>
    );
  }
}

export default App;
