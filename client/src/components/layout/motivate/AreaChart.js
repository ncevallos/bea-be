import React, {Fragment} from 'react'
import ReactApexChart from 'react-apexcharts';


class AreaChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          
        series: [{
          name: '',
          data: [4, 3, 3, 3]
        },
        //  {
        //   name: 'series2',
        //   data: [11, 32, 45, 32]
        // }
    ],
        options: {

        grid: {
            show: false
        },
          chart: {
            height: 350,
            type: 'area',
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
          colors: ['#E4F3FE'],
          fill: {
              type: "solid"
          },
          xaxis: {
           // type: 'datetime',
            categories: ["Planning", "Initial Eating", "Fullness", "After Eating"],
            lines: {
                show: false,
            }
          },
          yaxis: {
            min: 0,
            max: 5,        
            labels: {
                show: false
            },
            lines: {
                show: false,
            }
          },
          tooltip: {
       //     x: {
            //  format: 'dd/MM/yy HH:mm'
       //     },
            y: {
                    formatter: function(value, opt) {
                    switch(value){
                    case 4:
                        return "Great"
                    case 3:
                        return "Good"
                    case 2:
                        return "Neutral"
                    case 1:
                        return "Bad"
                    case 0:
                        return "Really Bad"
                    default:
                        return "No Entry"
                    }
                    }
                }
          },
        },
      
      };
    }

    render() {
        return (
            <Fragment>
            <ReactApexChart options={this.state.options} series={this.state.series} type="area" width="350" />
            </Fragment>

    );
}
}




export default AreaChart;