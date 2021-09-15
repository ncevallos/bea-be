import React, {Fragment} from 'react'
import ReactApexChart from 'react-apexcharts';


class RadialGraph extends React.Component {
    constructor(props) {
      super(props);
        console.log('this props in radial graph contains', this.props.percent)
      this.state = {
      
  //     series: [67],
        series: [this.props.percent],
        options: {
          chart: {
            height: 150,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
              hollow: {
                margin: 15,
                size: '50%',
                image: '/static/media/bowl-icon.ae91fe3c.svg',
                imageWidth: 40,
                imageHeight: 40,
                imageClipped: false
              },
              dataLabels: {
                name: {
                  show: false,
                  color: '#fff'
                },
                value: {
                  show: true,
                  color: '#333',
                  offsetY: 50,
                  fontSize: '19px',
                  fontWeight: 100
                }
              }
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              shadeIntensity: 0.4,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 53, 91]
            },
          },
          stroke: {
            lineCap: 'round'
          },
          labels: ['Volatility'],
        },
      
      
      };
    }


    render() {
        return (
            <Fragment>
            <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={150} />
            </Fragment>

    );
}
}




export default RadialGraph;