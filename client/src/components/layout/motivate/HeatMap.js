import React, {Fragment} from 'react'
import ReactApexChart from 'react-apexcharts';


class HeatMap extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          
        series: [{
          name: 'Not at all',
          data: [0,0,0,5]
        },
        {
          name: 'Slightly',
          data: 5
        //   data: generateData(18, {
        //     min: 0,
        //     max: 90
        //   })
        },
        {
          name: 'Somewhat',
          data: 6
        //   data: generateData(18, {
        //     min: 0,
        //     max: 90
        //   })
        },
        {
          name: 'Very',
          data: '4'
        //   data: generateData(18, {
        //     min: 0,
        //     max: 90
        //   })
        },
        {
          name: 'Extremely',
          data: '4'
        //   data: generateData(18, {
        //     min: 0,
        //     max: 90
        //   })
        }
        ],
        options: {
          chart: {
            height: 350,
            type: 'heatmap',
          },
          dataLabels: {
            enabled: false
          },
          colors: ["#008FFB"],
          title: {
            text: 'HeatMap Chart (Single color)'
          },
        },
      
      
      };
    }

  
      

    render() {
        return (
            <Fragment>
            <ReactApexChart options={this.state.options} series={this.state.series} type="heatmap" width="350" />
            </Fragment>

    );
}
}




export default HeatMap;