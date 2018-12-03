import React, { Component } from 'react';
import './App.css';
import Chart from "./components/Chart/Chart"

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData: [
        {
      savingslist: undefined,
      kwh: undefined,
      customers: fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({billlist: customers[0].billlist}, () => console.log("Customers found...", customers[3].concatedDates),{concatedDates: customers[3].concatedDates}))
      }

    ]
  }
}



  render() {
    return (
      <div className="App">
        <Chart billlist={this.state.billlist} concatedDates={this.state.concatedDates} kwh={this.state.kwh} savingslist={this.state.savingslist}/>
      </div>
    );
  }
}

export default App;
