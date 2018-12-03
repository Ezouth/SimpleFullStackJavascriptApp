import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Customers extends Component {
  constructor(){
    super();
    this.state = {
      customers: [],
      chartData: {}
    }
  }
  componentDidMount(){
      customers: fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log("Customers found...", customers)))
    }

  // }

  //   fetch('/api/customers')
  //     .then(res => res.json())
  //     .then(customers => this.setState({customers}, () => console.log("Customers found...", customers)))
  // }
  render() {
    return (
      <div>
        <div classname="Chart">
        <Bar
          data={this.state.chartData}
          options={{
            maintainAspectRatio:false
          }}
          />
        </div>
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map(customers=>
            <li id="bills" key={customers.billlist}>{customers.concatedDates}</li>)}
        </ul>

      </div>
    );
  }
}

export default Customers;
