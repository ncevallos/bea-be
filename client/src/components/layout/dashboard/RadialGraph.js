import React, {Fragment} from 'react'
import ReactApexChart from 'react-apexcharts';


class RadialGraph extends React.Component {
    constructor(props) {
      super(props);
        console.log('this props in radial graph contains', this.props.img)
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
                margin: 10,
                size: '60%',
                image: this.props.img,
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
                  color: '#ffffff',
                  offsetY: 70,
                  fontSize: '2.25rem'
                }
              }
            }
          },
          fill: {
            colors: ['#FFFFFF']
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