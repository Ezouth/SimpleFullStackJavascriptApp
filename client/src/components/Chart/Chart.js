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
                  'rgba(255, 229, 0, 0.6)',
                  ' #96ceb4',
                  'rgba(255, 106, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  '#ff6f69'
                ],
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
          position: 'bottom'
        }
      }}
      />
      </div>
    )
  }
}

export default Chart;
