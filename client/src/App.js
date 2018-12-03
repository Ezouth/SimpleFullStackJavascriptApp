
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UtilityDataObject from './components/utilityData/utilityData';
import Customers from "./components/customers/customers";
import Chart from "./components/Chart/Chart"


class App extends Component {
  constructor(){
    super();
    this.state =
    {
      customers: fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log("Customers found...", customers)))
    }

    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <UtilityDataObject />
        <Customers/>
        <Chart/>
      </div>
    );
  }
}

export default App;
