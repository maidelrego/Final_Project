import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";
import { nationalAverageQuarterData, quarterLabels } from "../../pages/Admin/Admin-Dashboard/data.js"
let myLineChart;


//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

export default class LineGraph extends Component {

  //  [quotes, setQuotes] = useState([]);
  //  loadQuotes(){
  //   API.getQuotes()
  //     .then(res => {
  //       setQuotes(res.data);
  //       console.log(res.data.length);
  //     })
  //     .catch(err => console.log(err));
  // }
  // useEffect(() => {
  //   loadQuotes();
  // }, []);

  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");
    const { data, average, labels } = this.props;

    if (typeof myLineChart !== "undefined") myLineChart.destroy();

    myLineChart = new Chart(myChartRef, {
      type: "bar",
      data: {
        //Bring in data
        labels: quarterLabels,
        datasets: [
          {
            label: "chicken tendies",
            data: nationalAverageQuarterData,
            fill: true,
            borderColor: "#6610f2"
          },
          {
            label: "National Average",
            data: average,
            fill: false,
            borderColor: "#417584"
          }
        ],
        backgroundColor: [
          '#36a2eb'
        ],
        options: {
          //Customize chart options

        }
      }});

  }
  render() {

    return (
      <div className={classes.graphContainer}>
        <canvas
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    )
  }
}

