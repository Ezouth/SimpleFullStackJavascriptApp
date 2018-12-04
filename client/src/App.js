import React, { Component } from 'react';
import './App.css';
import Chart from "./components/Chart/Chart";
import Example from './components/Navbar/navbar';
import LineChart from "./components/Chart/lineChart";
import { Switch, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
      <Example/>
      <h1> Utility Data </h1>
      <p id="large"> A nodejs and react demonstration by Tyler Whidden </p>
      <p id="large"> Below are several visual representations of data gathered from a utility bill </p>
      <p id="medium"> Scroll over the graph's data to get more info! </p>
      </div>
      <Chart id="test"/>
      <LineChart/>
      </div>
    );
  }
  
}

export default App;
