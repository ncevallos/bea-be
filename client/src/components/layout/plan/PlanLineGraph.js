import React, {Fragment, useState} from 'react'
import smileyIconGreat from '../../../img/planimgs/icon-great.png';
import smileyIconPrettyGood from '../../../img/planimgs/icon-prettygood.png';
import smileyIconHorrible from '../../../img/planimgs/icon-horrible.png';
import smileyIconNotGood from '../../../img/planimgs/icon-notgood.png';
import noEntry from '../../../img/planimgs/no-entry.png';
import {Line} from 'react-chartjs-2';
import chartTrendline from "chartjs-plugin-trendline";
import moment from 'moment';
import ReactApexCharts from 'react-apexcharts';


const apexData = {
    series: [{
        name: "Your Mood Level",
        data: []
    //    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'PAST 30 DAYS',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
      //  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        categories: [],
        // labels: {
        //   formatter: function(value, opts) {
        //       console.log("value in labels formatter has", value);
        //     switch(value){
        //     case 3:
        //         apexData.series[0].data.push("Great")
        //         break;
        //     case 2:
        //         apexData.series[0].data.push("Good")
        //         break;
        //     case 1:
        //         apexData.series[0].data.push("Not Good")
        //         break;
        //     case 0:
        //         apexData.series[0].data.push("Horrible")
        //         break;
        //     default:
        //         apexData.series[0].data.push("No Entry")
        //         break;
        //     }
        //       return;

        //      // return opts.dateFormatter(new Date(timestamp), 'dd MMM')
        //   }
        // }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          gradientToColors: [ '#f89a0b'],
          shadeIntensity: 1,
          type: 'vertical',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        },
      },
      yaxis: {
        min: 0,
        max: 3,        
        labels: {
            show: false
        }
      },
      tooltip: {
        y: {
        //  formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
            formatter: function(value, opt) {
                // console.log("value in labels formatter has", value);
                 let labelName = "";
               switch(value){
               case 3:
                   return "Great"
               case 2:
                   return "Good"
               case 1:
                   return "Not Good"
               case 0:
                   return "Horrible"
               default:
                   return "No Entry"
               }
             }
        }
      }
    }
}
const data = {
    labels: [],
  //  labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
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
        data: []
   //    data: [65, 59, null, 80, 81, 32, 56, 55, 40, 12, 45, 32, 23, 67, 32, 34, 21, 10, 8, 12, 56, null, 13, 18, 28, 64, 24, 31, 35, 19]
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
      console.log("props in Plan Line graph contains", this.props)
      let loopCount = 29;
      console.log("loop count is equal to", loopCount)
      let loopincremet = 0;
      data.labels = []
      data.datasets[0].data = []
      apexData.options.xaxis.categories = []
      apexData.series[0].data = []
 //     console.log("apex series data has", apexData.series[0].data);
 //     console.log("apex xaxis series data has", apexData.options.xaxis.categories);
      while(loopCount >= 0){
            let temp = moment(this.props.data[loopCount]).format("MMM DD")
            //console.log("temp in loopcount in plan body is", temp);
        data.labels.push(temp);
        apexData.options.xaxis.categories.push(temp)
         let temp2 = this.props.values[loopCount];

     //    console.log("temp2 in loopcount in plan body is", temp2);
        data.datasets[0].data.push(temp2)
        apexData.series[0].data.push(temp2);
        // switch(temp2){
        //     case 3:
        //         apexData.series[0].data.push("Great")
        //         break;
        //     case 2:
        //         apexData.series[0].data.push("Good")
        //         break;
        //     case 1:
        //         apexData.series[0].data.push("Not Good")
        //         break;
        //     case 0:
        //         apexData.series[0].data.push("Horrible")
        //         break;
        //     default:
        //         apexData.series[0].data.push("No Entry")
        //         break;
        //     }
          loopCount--;
          loopincremet++;
      }
      let control = "";
    return (
      <Fragment>
        {control === null ? (
          <div></div>
        ) : (
        <Fragment>
            {/* <Line
                // data={this.props.passedData}
                data={data}
                width={100}
                height={15}
                options={options}
                /> */}
                <ReactApexCharts options={apexData.options} series={apexData.series} type="line" height={350} />
                
        </Fragment>
        )}
      </Fragment>

    )
  }
}



export default PlanLineGraph;