import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
      super(props);
      this.state = {
        chartData: props.chartData
      }
    }

  render(){
    return (
      <div className="chart">
      <Bar
      data={this.state.chartData}
      options={{
        title: {
          text: 'Energy bill per month',
          fontSize: 35
        },
        legend: {
          position: 'bottom'
        }
      }}
      />
      <Line
      data={this.props.chartData}
      width="600" height="250"/>
      </div>
    )
  }
}

export default Chart;
