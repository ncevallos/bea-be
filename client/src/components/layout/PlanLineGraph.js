import React, {Fragment, useState} from 'react'
import smileyIconGreat from '../../img/planimgs/icon-great.png';
import smileyIconPrettyGood from '../../img/planimgs/icon-prettygood.png';
import smileyIconHorrible from '../../img/planimgs/icon-horrible.png';
import smileyIconNotGood from '../../img/planimgs/icon-notgood.png';
import noEntry from '../../img/planimgs/no-entry.png';
import {Line} from 'react-chartjs-2';
import chartTrendline from "chartjs-plugin-trendline";

const data = {
   // labels: [],
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    datasets: [
      {
        label: 'Mood',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(128,128,128,1)',
        borderCapStyle: 'butt',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 6,
        pointHitRadius: 10,

        trendlineLinear: {
            style: "rgb(128, 55, 202, 1)",
            lineStyle: "dotted|solid",
            width: 2
        },
   //     data: []
       data: [65, 59, null, 80, 81, 32, 56, 55, 40, 12, 45, 32, 23, 67, 32, 34, 21, 10, 8, 12, 56, null, 13, 18, 28, 64, 24, 31, 35, 19]
      }
    ]
  };

  const options = {
    maintainAspectRatio: true,
    spanGaps: false,
    legend:
    {
        display: false,
    },
    scales:
    {
        yAxes: [{
            display: false,
            gridLines : {
                display : false
            }
        }],
        xAxes: [{
            gridLines : {
                display : true,
                drawBorder: true,
                lineWidth: 1,
                drawOnChartArea: false
            }
        }]
    }
  };

class PlanLineGraph extends React.Component {
  render() {
      console.log("props in Plan Line graph contains", this.props.planResults.dates)
      let loopCount = this.props.planResults.dates.length;
      let loopincremet = 0;
      while(loopCount > 0){
   
          data.labels.push(this.props.planResults.dates);

          data.datasets[0].data.push(this.props.planResults.values)
          loopCount--;
      }
      let control = "";
    return (
      <Fragment>
        {control === null ? (
          <div></div>
        ) : (
        <Fragment>
            <Line
                // data={this.props.passedData}
                data={data}
                width={100}
                height={15}
                options={options}
                />
        </Fragment>
        )}
      </Fragment>

    )
  }
}



export default PlanLineGraph;