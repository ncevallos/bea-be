import React, {Fragment} from 'react'
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
        },
        toolbar: {
            show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      /*title: {
        display: false,
        text: 'PAST 30 DAYS',
        align: 'left'
      },*/
      grid: {
        borderColor: '#e0e0e0',
        strokeDashArray: 2,     
        row: {
          colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.3
        },
      },
      xaxis: {
      //  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        categories: [],
        type: 'datetime',
          labels: {
            show: true,
            rotate: -45,
            rotateAlways: false,
            hideOverlappingLabels: true,
            showDuplicates: false,
            trim: false,
            minHeight: undefined,
            maxHeight: 120,
            style: {
                colors: '#8f8f8f',
                fontSize: '11px',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
            offsetX: 0,
            offsetY: 0,
            
              format: 'dd'
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          //gradientToColors: [ '#329CCC', '#11C5CE', '#FF9A08' ],
          colorStops:
          [ 
            [
              {
                offset: 0,
                color: '#FF9A08',
                opacity: 1
              },
              {
                offset: 95,
                color: '#11C5CE',
                opacity: 50
              },
              {
                offset: 100,
                color: '#329CCC',
                opacity: 1
              }
            ]
          ],
          shadeIntensity: 1,
          type: 'vertical',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100]
        },
      },
      yaxis: {
        show: false,
        min: 0,
        max: 4,     
        forceNiceScale: true,
        labels: {
          formatter: function(value, opt) {
            console.log('value in y axis is', value)
          switch(value){
          case 4:
              return "Great"
            case 3:
              return "Good"
            case 2:
              return "Not Good"
            case 1:
              return "Horrible"
            case 0:
              return "Skipped Day"
            default:
                break;
            }   
          }
        }
        // labels: {
        //     show: false
        // }
      },
      tooltip: {
        y: {
        //  formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
            formatter: function(value, opt) {
                // console.log("value in labels formatter has", value);
               // DELETE  let labelName = "";
               switch(value){
                case 4:
                    return "Great"
                case 3:
                    return "Good"
                case 2:
                    return "Not Good"
                case 1:
                    return "Horrible"
               case 0:
                   return "Skipped Day"
               default:
                   return "Skipped Day"
               }
             }
        },
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


class PlanLineGraph extends React.Component {

  render() {


    //below is used to push the data to the options for the charts
      let loopCount = 29;
   //   let loopincremet = 0;
      data.labels = []
      data.datasets[0].data = []
      apexData.options.xaxis.categories = []
      apexData.series[0].data = []
      while(loopCount >= 0){
            let temp = moment(this.props.data[loopCount]).format("MMM DD")
        data.labels.push(temp);
        apexData.options.xaxis.categories.push(temp)
         let temp2 = this.props.values[loopCount];

        data.datasets[0].data.push(temp2)
        apexData.series[0].data.push(temp2);
          loopCount--;
      //    loopincremet++;
      }
      console.log("apexdata options has", apexData.options)
      console.log("apexdata series has ", apexData.series)
      let control = "";
    return (
      <Fragment>
        {control === null ? (
          <div></div>
        ) : (
        <Fragment>

                <div>
                  <ReactApexCharts options={apexData.options} series={apexData.series} type="line" height={250} />
                </div>
        </Fragment>
        )}
      </Fragment>

    )
  }
}



export default PlanLineGraph;