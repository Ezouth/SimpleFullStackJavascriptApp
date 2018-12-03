import React, { Component } from 'react';

class Customers extends Component {
  constructor(){
    super();
    this.state =
    {
      customers: fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log("Customers found...", customers)))
  }

    }
  // }

  //   fetch('/api/customers')
  //     .then(res => res.json())
  //     .then(customers => this.setState({customers}, () => console.log("Customers found...", customers)))
  // }
  render() {
    return (
      <div>
        <h2>Customers</h2>
      </div>
    );
  }
}

export default Customers;
