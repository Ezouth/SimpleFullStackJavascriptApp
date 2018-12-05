import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

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
        .then(customers => this.setState({kwh: customers[2].kwh}))
        customers: fetch('/api/customers')
        .then(res => res.json())
        .then(customers => this.setState({labels: customers[3].concatedDates}))
        .then(() => this.setState({
          chartData: {
            labels: this.state.labels,
            datasets:[
              {
                label: "kWh (kilowatt hour)",
                data: this.state.kwh,
                backgroundColor: [
                  'rgba(255, 229, 0, 0.6)'

                ],
                strokeColor: "rgba(220,220,220,0.8)",
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
          text: "Energy Usage per Month",
          fontSize: 35
        },
        tooltips: {
          mode: 'x-axis'
        }
      }}
      />
      </div>
    )
  }
}

export default LineChart;
