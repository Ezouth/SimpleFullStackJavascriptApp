import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component {

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

        fetch('murmuring-meadow-19180/api/customers')
        .then(res => res.json())
        .then(customers => this.setState({data: customers[0].billlist}))
        fetch('murmuring-meadow-19180/api/customers')
        .then(res => res.json())
        .then(customers => this.setState({labels: customers[3].concatedDates}))
        .then(() => this.setState({
          chartData: {
            labels: this.state.labels,
            datasets:[
              {
                label: "$",
                data: this.state.data,
                backgroundColor: [
                  '#c1946a',
                  '#86af49',
                  '#808000',
                  '#4ea237',
                  '#008000'
                ],
                hoverBackgroundColor: '#ffff4d'
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
          text: 'Bill per Month',
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
            max: 160,
            min: 0,
            stepSize: 20
          }
        }]}}}
      />
      </div>
    )
  }
}

export default Chart;
