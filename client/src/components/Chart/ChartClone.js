import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
    constructor(){
      super();
      this.state = {
      chartData: [
          {
          customers: fetch('/api/customers')
          .then(res => res.json())
          .then(customers => this.setState({billlist: customers[0].billlist}, () => console.log("Billlist found...", customers[0].billlist)))
        },
        {
          customers: fetch('/api/customers')
          .then(res => res.json())
          .then(customers => this.setState({concatedDates: customers[3].concatedDates}, () => console.log('Concated dates found', customers[3].concatedDates)))
        },
        {
          labels: this.concatedDates,
          datasets:[
            {
              label: "Price per month",
              data: this.billlist,
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

      ]
    }
  }



    componentWillMount(){
      this.state = {
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
