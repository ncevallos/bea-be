import React, { useEffect, Fragment } from 'react'
import smileyIconRound from '../../../img/smiley-icon-round.svg';
import heartIcon from '../../../img/heart-icon.svg';
import bowlIcon from '../../../img/bowl-icon.svg';
import newspaperIcon from '../../../img/newspaper-icon.svg';
import smileyIconUnhappyRound from '../../../img/smiley-icon-unhappy-round.svg';
import {Line} from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResultsByIdToday, getResultsById, getSummary } from '../../../actions/postPlanResults';
import chartTrendline from "chartjs-plugin-trendline";
import PlanMoodHeader from './PlanMoodHeader';
import PlanLineGraph from './PlanLineGraph';
import PlanMain from './/PlanMain';
import PlanMoodHeaderFree from '../PlanMoodHeaderFree';
import PlanHeader from '../PlanHeader';
import CalendarPage from './calendar';
import Spinner from '../../layout/Spinner';
import moment from 'moment';
import RadialGraph from './RadialGraph';
import 'react-statusbar/dist/statusbar.css';
import * as Statusbar from 'react-statusbar';
import ProgressBar from 'react-bootstrap/ProgressBar'


const data = {
//    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    labels: [],
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
     //   data: [65, 59, null, 80, 81, 32, 56, 55, 40, 12, 45, 32, 23, 67, 32, 34, 21, 10, 8, 12, 56, null, 13, 18, 28, 64, 24, 31, 35, 19]
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
 const testData = ["2021-08-06T16:28:06.927Z", "Thu Aug 12 2021 00:00:00 GMT-0400 (Eastern Daylight Time)", "Fri Aug 13 2021 00:00:00 GMT-0400 (Eastern Daylight Time)",
  "Fri Aug 20 2021 00:00:00 GMT-0400 (Eastern Daylight Time)"]
  const Plan3 = ({ user, getResultsById, getResultsByIdToday, planResult2: { planResults2 } }) => {
      //planResult: { planResults }, 
      //todayPlanResult: {todayPlanResults}

    //  let loopCount = planResults2.dates[0].length;
    //   let loopCount = 29;
    //   console.log("loop count is equal to", loopCount)
    //   let loopincremet = 0;
    //   while(loopCount >= 0){
    //         let temp = moment(planResults2.dates[0].[loopCount]).format("DD")
    //         console.log("temp in loopcount in plan body is", temp);
    //      data.labels.push(temp);

    //      let temp2 = planResults2.values[0].[loopCount];
    //      console.log("temp2 in loopcount in plan body is", temp2);
    //      data.datasets[0].data.push(temp2)
    //       loopCount--;
    //       loopincremet++;
    //   }
   console.log("plan results has in plan body has", planResults2);
   let headercontrol = 0;
    headercontrol = planResults2.summaryStats.avgMood;
   // console.log("today plan results has", todayPlanResults);

    return (
        <Fragment>
          {planResults2 === null ? (
            <Spinner />
          ) : (
            <Fragment>
                <div>
                    <PlanLineGraph data={planResults2.dates[0]} values={planResults2.values[0]} />
                    {/* <Line
                       //     data={data}
                            data={data}
                            width={100}
                            height={15}
                            options={options}
                        /> */}
                        <PlanMoodHeader avgMood={planResults2.summaryStats.avgMood} />
                    <div>
                        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                            <li className="col-span-2 flex flex-col text-center bg-white rounded-xl divide-y divide-gray-200 border border-gray-400">
                                <div className="flex-1 flex flex-col p-8 items-center">
                                    <span className="text-beaBlueText text-sm">Calendar</span> 
                                    <CalendarPage dates={planResults2.dates[0]} values={planResults2.values[0]} />
                                    <div className="planprogress">
                                    Great<br/>
                                    {planResults2.summaryStats.great}%<br/>
                                    <ProgressBar now={planResults2.summaryStats.great}  variant="danger" />
                                    Good<br/>
                                    {planResults2.summaryStats.good}%<br/>
                                    <ProgressBar now={planResults2.summaryStats.good}  variant="warning" />
                                    Not Good<br/>
                                    {planResults2.summaryStats.notgood}%<br/>
                                    <ProgressBar now={planResults2.summaryStats.notgood}  variant="success" />
                                    Horrible<br/>
                                    {planResults2.summaryStats.horrible}%<br/>
                                    <ProgressBar now={planResults2.summaryStats.horrible}  variant="info" />
                                    </div>
                                    {/* <span className="mt-6 p-3 bg-beaLightBlue rounded-3xl flex items-center justify-center">
                                        <img src={bowlIcon} alt="Bowl Icon" className="w-11" />
                                    </span>
                                    <h2 className="mt-0 text-gray-700 text-3xl font-light">{planResults2.summaryStats.stayedontrackpct}%</h2> */}
                                    <RadialGraph percent={planResults2.summaryStats.stayedontrackpct}/>
                                    <span className="mt-6 text-gray-700 text-sm font-thin">Why you stayed on track</span>
                                    <h2 className="mt-0 text-gray-700 text-3xl font-light">{planResults2.summaryStats.stayedontrack}</h2>
                                </div>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                            <li className="col-span-1 flex flex-col text-center bg-white rounded-xl divide-y divide-gray-200 border border-gray-400">
                                <div className="flex-1 flex flex-col p-8 items-center">
                                    <span className="text-beaBlueText text-sm">FAVORITE GOAL</span>
                                    {/* <span className="mt-6 p-3 bg-beaLightBlue rounded-3xl flex items-center justify-center">
                                        <img src={bowlIcon} alt="Bowl Icon" className="w-11" />
                                    </span>
                                    <h2 className="mt-0 text-gray-700 text-3xl font-light">{planResults2.summaryStats.favgoalpct}%</h2> */}
                                    <RadialGraph percent={planResults2.summaryStats.favgoalpct}/>
                                    <span className="mt-6 text-gray-700 text-sm font-thin">Most important goal</span>
                                    <h2 className="mt-0 text-gray-700 text-3xl font-light">{planResults2.summaryStats.favgoal}</h2>
 
                                </div>
                                <div className="flex-1 flex flex-col p-8 items-center">
                                    {/* <span className="mt-6 p-3 bg-beaLightBlue rounded-3xl flex items-center justify-center">
                                        <img src={bowlIcon} alt="Bowl Icon" className="w-11" />
                                    </span>
                                    <h2 className="mt-0 text-gray-700 text-3xl font-light">{planResults2.summaryStats.favgoal2pct}%</h2> */}
                                    <RadialGraph percent={planResults2.summaryStats.favgoal2pct}/>
                                    <span className="mt-6 text-gray-700 text-sm font-thin">Main focus of food choice</span>
                                    <h2 className="mt-0 text-gray-700 text-3xl font-light">{planResults2.summaryStats.favgoal2}</h2>
                                </div>
                            </li>
                            <li className="col-span-1 flex flex-col text-center bg-white rounded-xl divide-y divide-gray-200 border border-gray-400">
                                <div className="flex-1 flex flex-col p-8 items-center">
                                    <span className="text-beaBlueText text-sm">FAVORITE ACTION</span>
                                    <RadialGraph percent={planResults2.summaryStats.favactionpct}/>
                                    <span className="mt-6 text-gray-700 text-sm font-thin">The action that stopped unmindful eating</span>
                                    <h2 className="mt-0 text-gray-700 text-3xl font-light">{planResults2.summaryStats.favaction}</h2>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

        </Fragment>
        )}
      </Fragment>
    )
}

//export default Plan3;


  Plan3.propTypes = {
    getResultsByIdToday: PropTypes.func.isRequired,
    getResultsById: PropTypes.func.isRequired,
    getSummary:  PropTypes.func.isRequired,
    planResult2: PropTypes.object.isRequired,
    todayPlanResult: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    planResult2: state.planResult2,
    todayPlanResult: state.todayPlanResult,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  });
  
  export default connect(mapStateToProps, { getResultsById, getResultsByIdToday, getSummary })(Plan3);