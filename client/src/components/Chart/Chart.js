import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
  constructor(){
    super();
    this.state =
    {
      customers: fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log("Customers found...", customers)))
    }

    }

static defaultProps = {
  displayTitle: true,
  displayLegend: true,
  legendPosition: 'bottom'
}


  render(){
    return (
      <div className="chart">
      <Bar
      data={this.state.customers.billlist}
      options={{
        title: {
          text: 'Energy bill per month',
          fontSize: 35
        },
        legend: {
          position: 'right'
        }
      }}
      />
      </div>
    )
  }
}

export default Chart;
