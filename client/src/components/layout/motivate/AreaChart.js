import React, {Fragment} from 'react'
import ReactApexChart from 'react-apexcharts';


class AreaChart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          
        series: [{
          name: '',
    //      data: [3, 4, 4, 4]
          data: props.data
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
            },
          },
          yaxis: {
            min: 0,
            max: 5,        
            labels: {
                show: true,
                style: {
                        colors: ["#000000"]
                },
                formatter: function(value) {
                    switch(value){
                    case 5:
                        return " Great"
                    case 4:
                        return " Good"
                    case 3:
                        return " Neutral"
                    case 2:
                        return "Bad"
                    case 1:
                        return "Really Bad"
                    case 0:
                        return ""
                    default:
                        return ""
                    }
                    },

                minWidth: 0,
                maxWidth: 160,
                align: 'right',
                // show: false,
                // style: {
                //     colors: [function({ value, seriesIndex, w }) {
                //         switch(value){
                //             case 5:
                //                 return "#E56F06"
                //             case 4:
                //                 return "#FFAD33"
                //             case 3:
                //                 return "#11C5CE"
                //             case 2:
                //                 return "#329CCC"
                //             case 1:
                //                 return "#666666"
                //             case 0:
                //                 return "#f2f2f2"
                //             default:
                //                 return "#f2f2f2"
                //             }
                //       }]
                // }
            },
            lines: {
                show: false,
            }
          },
          tooltip: {
            //   enabled: false,
           x: {
             show: true
           },
            y: {
                    formatter: function(value, opt) {
                    switch(value){
                    case 5:
                        return "Great"
                    case 4:
                        return "Good"
                    case 3:
                        return "Neutral"
                    case 2:
                        return "Bad"
                    case 1:
                        return "Really Bad"
                    case 0:
                        return "No Entry"
                    default:
                        return "No Entry"
                    }
                    }
                },
                marker: {
                    show: false
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