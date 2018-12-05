import React, { Component } from 'react';
import LineChart from "../../components/Chart/lineChart";
import Chart from "../../components/Chart/Chart";
import BarChart from "../../components/Chart/SavingsChart";
import './Home.css';

// This has to hold all my Charts
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container extra-margin">
        <h1> Utility Data </h1>
        <p id="small"> A nodejs and react demonstration by Tyler Whidden </p>
        <p id="small">Scroll over the graph's data to get more info! </p>
        </div>
        <Chart id="test"/>
        <LineChart/>
        <BarChart/>
        </div>
    );
  }
}

export default Home;
