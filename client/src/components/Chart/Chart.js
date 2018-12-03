import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
    constructor(){
      super();
      this.state = {
      chartData: {
        labels: [100,2,3,4,5,6],
        datasets:[
          {
            label: "Price per month",
            data: [200,30,50,60,70,90],
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
    }
  }

  componentDidMount(){
    
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
      </div>
    )
  }
}

export default Chart;
