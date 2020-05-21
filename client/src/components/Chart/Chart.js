import React, { useEffect, useState} from "react";
import Chart from "chart.js";
import { nationalAverageQuarterData, quarterLabels } from "./data.js";
import axios from "axios";
let myLineChart;


//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

let labelss = ["May 1st", "May 15th", "June 1st", "June 15th"];

export default function LineGraph() {
  const [chart, setChart] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://corona.lmao.ninja/v2/historical/pakistan"
      );

      setChart({
        labels: [Object.keys(res.data.timeline.cases)],
        datasets: [
          {
            label: "Covid-19",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: Object.values(res.data.timeline.cases)
          }
        ]
      });
    } catch (error) {
      console.log(error.response);
    }
  };


   

  // componentDidMount() {
  //   this.loadQuotes();
  //   this.buildChart();
  // }

  function buildChart() {
    let chartRef = React.createRef();
    const myChartRef = chartRef.current.getContext("2d");
    // const { data, average, labels } = this.props;

    if (typeof myLineChart !== "undefined") {
      myLineChart.destroy();
    }

    myLineChart = new Chart(myChartRef, {
      type: "bar",
      data: {
        //Bring in data
        labels: labelss, // ['WE May 1st', 'WE May 7th'] -- use moment to get this array
        datasets: [
          {
            label: "Week Ending",
            data: this.loadQuotes(), // [5, 7] -- .find -> .then((data)=> data.length)
            fill: true,
            borderColor: "#6610f2"
          }
        ],
        options: {
          //Customize chart options
          backgroundColor: [
            "#36a2eb"
          ]
        }
      }
    });

  }

  return (
    <div>
      <canvas
        id="myChart"
        ref={this.chartRef}
      />
      {/* <div>{this.props}</div> */}
    </div>
  );
}

