import React, {Component} from 'react';
import {Bar, Line} from 'react-chartjs-2';

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

        customers: fetch('/api/customers')
        .then(res => res.json())
        .then(customers => this.setState({data: customers[0].billlist}, () => console.log(this.state.data)))
        customers: fetch('/api/customers')
        .then(res => res.json())
        .then(customers => this.setState({labels: customers[3].concatedDates}, () => console.log('Concated dates found', this.state.labels)))
        .then(() => this.setState({
          chartData: {
            labels: this.state.labels,
            datasets:[
              {
                label: "Price per month",
                data: this.state.data,
                backgroundColor: [
                  '#BC8F8F',
                  ' #DAA520',
                  '#808000',
                  '#A52A2A',
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
          text: 'Cost of Bill per Month',
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
