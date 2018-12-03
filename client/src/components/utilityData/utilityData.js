import React, { Component } from 'react';
import './utilityData.css';


class UtilityDataObject extends Component {
  constructor() {
    super();
    this.state = {
      concatedDates: [],
      billlist: [],
      savingslist: [],
      kwh: []

    };
  }


  render() {
    return (
      <div>
      <h2> Utility data </h2>
      <h3>  </h3>
      </div>
    );
  }
}

export default UtilityDataObject;
