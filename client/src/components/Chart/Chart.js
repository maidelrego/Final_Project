import React, { Component } from 'react'
import Chart from "chart.js";
import { nationalAverageQuarterData, quarterLabels } from "./data.js"
let myLineChart;


//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

export default class LineGraph extends Component {

  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  }

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");
    // const { data, average, labels } = this.props;

    if (typeof myLineChart !== "undefined") myLineChart.destroy();

    myLineChart = new Chart(myChartRef, {
      type: "bar",
      data: {
        //Bring in data
        labels: quarterLabels, // ['WE May 1st', 'WE May 7th'] -- use moment to get this array
        datasets: [
          {
            label: "chicken tendies",
            data: nationalAverageQuarterData, // [5, 7] -- .find -> .then((data)=> data.length)
            fill: true,
            borderColor: "#6610f2"
          }
        ],
        options: {
          //Customize chart options
          backgroundColor: [
            '#36a2eb'
          ]
        }
      }});

  }
  render() {

    return (
      <div>
        <canvas
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    )
  }
}

