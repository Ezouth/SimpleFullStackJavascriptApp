import React, {Component} from 'react';
import {Bar, Line} from 'react-chartjs-2';

class LineChart extends Component {

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
        }
      }
    }

      getChartData(){

        customers: fetch('/api/customers')
        .then(res => res.json())
        .then(customers => this.setState({kwh: customers[2].kwh}, () => console.log(this.state.data)))
        customers: fetch('/api/customers')
        .then(res => res.json())
        .then(customers => this.setState({labels: customers[3].concatedDates}, () => console.log('Concated dates found', this.state.labels)))
        .then(() => this.setState({
          chartData: {
            labels: this.state.labels,
            datasets:[
              {
                label: "Energy Usage Per Month",
                data: this.state.kwh,
                backgroundColor: [
                  '#cccc00'
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
      <Line
      data={this.state.chartData}
      options={{
        title: {
          display: true,
          text: "Energy Usage Per Month",
          fontSize: 55
        }
      }}
      />
      </div>
    )
  }
}

export default LineChart;
