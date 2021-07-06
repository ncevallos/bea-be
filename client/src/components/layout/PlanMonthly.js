import React, { useEffect } from 'react'
import { Links } from 'react-router-dom';
import moment from 'moment';
import smileyIconRound from '../../img/smiley-icon-round.svg';
import heartIcon from '../../img/heart-icon.svg';
import bowlIcon from '../../img/bowl-icon.svg';
import newspaperIcon from '../../img/newspaper-icon.svg';
import smileyIconUnhappyRound from '../../img/smiley-icon-unhappy-round.svg';
import {Line} from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResultsByIdToday, getResultsById } from '../../actions/postPlanResults';
import chartTrendline from "chartjs-plugin-trendline";
import PlanMoodHeader from './PlanMoodHeader';
import PlanMoodHeaderFree from './PlanMoodHeaderFree';
import PlanHeader from './PlanHeader';
import PlanSmiley from './PlanSmiley';
import PlanIcons from './PlanIcons';


const data = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
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

        data: [65, 59, null, 80, 81, 32, 56, 55, 40, 12, 45, 32, 23, 67, 32, 34, 21, 10, 8, 12, 56, null, 13, 18, 28, 64, 24, 31, 35, 19]
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
  const Plan3 = ({ user, getResultsById, getResultsByIdToday, planResult: { planResults } }) => {
      //planResult: { planResults }, 
      //todayPlanResult: {todayPlanResults}

    useEffect(() => {
        getResultsByIdToday();
        getResultsById();
        if(planResults.length){
            thisResults = planResults[0];
            dataloaded = true;
            console.log(thisResults);
        }
    }, [getResultsByIdToday], [getResultsById]);
    let dataloaded = false;
    let thisResults = [];
   console.log("plan results has", planResults);

   // console.log("today plan results has", todayPlanResults);

// export const Plan3 = () => {
    return (
        <section>
            <div className="flex mx-auto p-4">
                <div className="flex flex-col flex-grow">
                    





                    <div className="flex flex-col max-w-full overflow-hidden">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {planResults.map((planResult) => (

                                    <tr key={planResult._id}>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="flex flex-col items-center">
                                                        <div className="text-xs font-light text-gray-700">
                                                            {/* Need to implement a check for if today write today */}
                                                        {moment(planResult.date).format('ddd')}
                                                        </div>
                                                        <div className="text-3xl text-gray-700 overflow-hidden break-words max-w-xl overflow-hidden leading-tight">
                                                        {moment(planResult.date).format('D')}
                                                        </div>
                                                </div>
                                                <div className="flex ml-4 items-center justify-center">
                                                    <span className="p-1 mr-3 bg-beaLightBlue rounded-xl flex items-center justify-center">
                                                            <PlanIcons msg={planResult.plangoal} />
                                                    </span>
                                                    <div>
                                                        <div className="text-sm font-light text-gray-700">
                                                        Your main goal is to eat
                                                        </div>
                                                        <div className="text-xl text-gray-700 overflow-hidden break-words max-w-xl overflow-hidden leading-tight">
                                                        {planResult.plangoal} and<br/>
                                                        {planResult.plangoal2}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-2 py-4">
                                            <div className="flex items-center">
                                                <div className="flex ml-4 items-center justify-center">
                                                    <span className="p-1 mr-3 bg-beaLightBlue rounded-xl flex items-center justify-center">
                                                            <PlanIcons msg={planResult.plangoal5} />
                                                    </span>
                                                    <div>
                                                        <div className="text-sm font-light text-gray-700">
                                                            When you feel the urge to eat
                                                        </div>
                                                        <div className="text-xl text-gray-700 overflow-hidden break-words max-w-xl overflow-hidden leading-tight">
                                                        {planResult.plangoal5}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            {/* <img src={smileyIconUnhappyRound} alt="Unhappy Smiley Icon" className="w-14" />
                                             */}
                                             <PlanSmiley mood={planResult.howdoyoufeel}/>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>








                </div>
                <div className="w-72 min-w-72 pl-3">
                    <div className="flex justify-center items-center w-full h-72 rounded-xl bg-gray-300 w-72">
                        <button type="button" className="relative inline-flex items-center px-6 py-2 shadow-none text-sm font-medium rounded-full text-beaDarkPurple hover:bg-beaDarkPurple hover:text-white transition-all border-t border-b border-l border-r border-beaDarkPurple group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        Call to Action
                        </button>
                    </div>
                </div>  
            </div>
        </section>
    )
}

//export default Plan3;


  Plan3.propTypes = {
    getResultsByIdToday: PropTypes.func.isRequired,
    getResultsById: PropTypes.func.isRequired,
    planResult: PropTypes.object.isRequired,
    todayPlanResult: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    planResult: state.planResult,
    todayPlanResult: state.todayPlanResult,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  });
  
  export default connect(mapStateToProps, { getResultsById, getResultsByIdToday })(Plan3);