import React, {Fragment} from 'react'
import ReactApexChart from 'react-apexcharts';


class BarChart extends React.Component {
    constructor(props) {
      super(props);

          this.state = {
            options: {
              chart: {
                id: "basic-bar",
                toolbar: {
                    show: false
                },
              },
              dataLabels: {
                enabled: false
              },
              xaxis: {
                categories: [">2 hr", "<10 min", "10 to 30 min", "30 min to 1 hr", "1 to 2 hr"],  
                // labels: {
                //     show: false
                // }
              },
              yaxis: {
                labels: {
                    show: false
                }
              },
              tooltip: {
                  enabled: false
              }
            },
            // toolbar: {
            //     show: false
            // },
            series: [
              {
                name: "",
                data: [0, 2, 0, 4, 6]
              }
            ]
          };
        }
      

    render() {
        return (
            <Fragment>
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" width="350" />
            </Fragment>

    );
}
}




export default BarChart;