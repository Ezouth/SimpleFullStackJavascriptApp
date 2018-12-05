import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class BarChart extends Component {

    constructor(){
      super();
      this.state = {
        chartData : {
          labels: [],
          datasets: [{
            label: '',
            data: [],
            backgroundColor: []
          }]
        },
        concatedDates:[],
        billlist: []
      }
    }

      getChartData(){
        customers: fetch('/api/customers')
        .then(res => res.json())
        .then(customers => this.setState({savingslist: customers[1].savingslist}))
        customers: fetch('/api/customers')
        .then(res => res.json())
        .then(customers => this.setState({labels: customers[3].concatedDates}))
        .then(() => this.setState({
          chartData: {
            labels: this.state.labels,
            datasets:[
              {
                label: "$",
                data: this.state.savingslist,
                backgroundColor: [
                  '#86af49',
                  '#e3eaa7',
                  '#808000',
                  '#c1946a',
                  '#405d27'
                ],
                hoverBackgroundColor: '#82b74b'
              }
            ]
          }
        }));
      }

      componentWillMount(){
        this.getChartData();
      }
  render(){
    console.log(this.state.chartDatas)
    return (
      <div className="chart">
      <Bar
      data={this.state.chartData}
      options={{
        title: {
          display: true,
          text: 'Savings per Month',
          fontSize: 35
        },
        legend: {
          position: 'bottom',
        },
        scales: {
        xAxes: [{
            barPercentage: 0.8,
            gridLines: false
            }],
        yAxes: [{
         ticks: {
            max: 20,
            min: 0,
            stepSize: 2
          }
        }]}}}
      />
      </div>
    )
  }
}

export default BarChart;
