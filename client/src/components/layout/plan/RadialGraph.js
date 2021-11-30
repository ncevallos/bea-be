import React, {Fragment} from 'react'
import ReactApexChart from 'react-apexcharts';
import differentFoods from '../../../img/planimgs/differentFoods.png';
import meditate from '../../../img/planimgs/MeditateN.png';
import read from '../../../img/planimgs/readN.png';
import smallerAmounts from '../../../img/planimgs/smallerAmount.png';
import noEntry from '../../../img/planimgs/no-entry.png';
import somethingElse from '../../../img/planimgs/somethingElse.png';
import somethingElse2 from '../../../img/planimgs/somethingElse.png';
import somethingSmall from '../../../img/planimgs/EatSomethingSmall.png';
import takeAWalk from '../../../img/planimgs/take-a-walk.png';
import fewerCalories from '../../../img/planimgs/fewercalories.png';
import somethingEmotional from '../../../img/planimgs/somethingemotional.png';
import somethingPhysical from '../../../img/planimgs/somethingphysical.png';
import talkToAFriend from '../../../img/planimgs/talkToAFriend.png';
import StopWhenFull from '../../../img/planimgs/stopwhenfull.png';
import MoreFillingFoods from '../../../img/planimgs/morefillingfoods.png';
import lessFat from '../../../img/planimgs/lessfat.png';
import lessSugar from '../../../img/planimgs/lesssugar.png';
import lessCarbs from '../../../img/planimgs/lesscarbs.png';



class RadialGraph extends React.Component {
    constructor(props) {
      super(props);
        console.log('this props in radial graph contains', this.props)
        let iconurl = noEntry
        //answers to favorite goal
       if(this.props.icon === "Different foods"){

        iconurl = differentFoods
        }
        else if(this.props.icon === "Smaller Amounts"){
            iconurl = smallerAmounts
        }
        //answers to favorite goal 2
        else if(this.props.icon === "Stop when full"){
            iconurl = StopWhenFull
        }
        else if(this.props.icon === "More filling foods"){
            iconurl = MoreFillingFoods
        }
        else if(this.props.icon === "Less fat"){
            iconurl = lessFat
        }
        else if(this.props.icon === "Less sugar"){
            iconurl = lessSugar
        }
        else if(this.props.icon === "Fewer carbs"){
            iconurl = lessCarbs
        }
        else if(this.props.icon === "Fewer Calories"){
            iconurl = fewerCalories
        }
        //for the food choices 'something else both are capitalized'
        else if(this.props.icon === "Something Else"){
            iconurl = somethingElse2
        }
        //answers to Favorite Action
        else if(this.props.icon === "Take a walk"){
            iconurl = takeAWalk
        }
        else if(this.props.icon === "Meditate"){
            iconurl = meditate
        }
        else if(this.props.icon === "Talk to a friend"){
            iconurl = talkToAFriend
        }
        else if(this.props.icon === "Eat something small"){
            iconurl = somethingSmall
        }
        else if(this.props.icon === "Read"){
            iconurl = read
        }
        else if(this.props.icon === "Something else"){

            iconurl = somethingElse
        }
        else if(this.props.icon === "Something emotional"){
            iconurl = somethingEmotional
        }
        else if(this.props.icon === "Something physical"){
            iconurl = somethingPhysical
        }
        else {
            iconurl = noEntry
        }
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
                image: iconurl,
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
            type: 'solid',
            colors: ['#056895'],
            /*gradient: {
              shade: 'light',
              shadeIntensity: 0.4,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 53, 91]
            },*/
          },
          stroke: {
            lineCap: 'round'
          },
          labels: ['Volatility'],
        },
      };
      //end of state
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