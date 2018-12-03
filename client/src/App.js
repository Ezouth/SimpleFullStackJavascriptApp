

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UtilityDataObject from './components/utilityData/utilityData';
import Customers from "./components/customers/customers";
import Chart from "./components/Chart/Chart"


var x = fetch('/api/customers')
.then(res=> res.json())
console.log(x);
class App extends Component {
  constructor(){
    super();
    this.state = {
      billlist: undefined,
      concatedDates: undefined,
      savingslist: undefined,
      kwh: undefined,
      customers: fetch('/api/customers')
      .then(res => res.json())
    };
  }


  //  .then(customers => this.setState({customers}, () => console.log("Customers found...", customers)))
  getData = async(e) => {
    e.preventDefault();
  const api_call = await fetch('/api/customers');

  const data = await api_call.json();

  this.setState({
    billlist: data.billlist,
    concatedDates: data.concatedDates,
    savingslist: data.savingslist,
    kwh: data.kwh
  });
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
        <Chart billlist={this.state.billlist} concatedDates={this.state.concatedDates} kwh={this.state.kwh} savingslist={this.state.savingslist}/>
      </div>
    );
  }
}

export default App;
