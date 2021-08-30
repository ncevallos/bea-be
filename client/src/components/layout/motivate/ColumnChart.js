import React, {Fragment} from 'react'
import ReactApexChart from 'react-apexcharts';


class ColumnChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          
        series: [{
          name: 'Temptation Level',
          data: props.level
       //   data: [4, 5, 3, 2, 1, 4, 4,]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: props.dates
        //    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
          },
          yaxis: {
            // title: {
            //   text: '$ (thousands)'
            // }
            //labels: ['Extremely', 'Very', 'Somewhat', 'Slightly', 'Not at all'],
            labels: {
                style: {
                    colors: ['#000000']
                },
                formatter: function(value) {
                    switch(value){
                    case 5:
                        return "Extremely"
                    case 4:
                        return "Very"
                    case 3:
                        return "Somewhat"
                    case 2:
                        return "Slightly"
                    case 1:
                        return "Not at all"
                    case 0:
                        return ""
                    default:
                        return ""
                    }
                    } 
          },
        },
          fill: {
            opacity: 1,
            colors: [function({ value, seriesIndex, w }) {
                switch(value){
                    case 5:
                        return "#E56F06"
                    case 4:
                        return "#FFAD33"
                    case 3:
                        return "#11C5CE"
                    case 2:
                        return "#329CCC"
                    case 1:
                        return "#666666"
                    case 0:
                        return "#f2f2f2"
                    default:
                        return "#f2f2f2"
                    }
              }]
          },
          tooltip: {
            y: {
                formatter: function(value, opt) {
                switch(value){
                case 5:
                    return "Extremely"
                case 4:
                    return "Very"
                case 3:
                    return "Somewhat"
                case 2:
                    return "Slightly"
                case 1:
                    return "Not at all"
                case 0:
                    return "Really Bad"
                default:
                    return "No Entry"
                }
                }
            }
          }
        },
      
      
      };
    }


    render() {
        return (
            <Fragment>
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" width="450" />
            </Fragment>

    );
}
}




export default ColumnChart;