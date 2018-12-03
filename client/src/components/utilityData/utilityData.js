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

//This is nonsense but this is where I want the variable to be passed
  // componentDidMount(){
  //   fetch('/api/data')
  //     .then(res => res.json("concatedDates"))
  //     .then(concatedDates => this.setState({concatedDates}, () => console.log('Dates fetched..', concatedDates)));

      // .then(this.setState("concatedDates": concatedDates, "billlist": billlist, "savingslist": savingslist, "kwh": kwh));
  //  }

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
