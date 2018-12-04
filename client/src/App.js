import React, { Component } from 'react';
import './App.css';
import Chart from "./components/Chart/Chart"

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{
        concatedDates: undefined,
        billlist: undefined
      }
    }
  }
// .then(customers => this.setState({concatedDatest: customers[3].concatedDates}, () => console.log("Customers found...", customers[3].concatedDates)))

  getChartData(){

    customers: fetch('/api/customers')
    .then(res => res.json())
    .then(customers => this.setState({billlist: customers[0].billlist}, () => console.log("Billlist found...", customers[0].billlist)))
    customers: fetch('/api/customers')
    .then(res => res.json())
      .then(customers => this.setState({concatedDates: customers[3].concatedDates}, () => console.log('Concated dates found', customers[3].concatedDates)))

      this.setState({
      chartData: {
        labels: this.state.concatedDates,
        datasets:[
          {
            label: "Price per month",
            data: this.state.billlist,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 109, 232, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153,102,125, .6)'
            ]
          }
        ]
      }
    });
  }

  componentWillMount(){
    this.getChartData();
  }
  render() {
    console.log(this.state.concatedDates)
    return (
      <div className="App">
      <h1> Utility Data </h1>
      <p> A nodejs and react demonstration by Tyler Whidden </p>
      <p id="large"> Below are several visual representations of data gathered from a utility bill </p>
        <Chart billlist={this.state.billlist} concatedDates={this.state.concatedDates} chartData={this.state.chartData}/>
      </div>
    );
  }
}

export default App;
