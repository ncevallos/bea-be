import React, { useEffect, Fragment } from 'react'
import bowlIcon from '../../img/bowl-icon.svg';
import newspaperIcon from '../../img/newspaper-icon.svg';
import {Line} from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResultsByIdToday, getResultsById, getSummary } from '../../actions/postPlanResults';
// import chartTrendline from "chartjs-plugin-trendline";
// import PlanMoodHeader from './plan/PlanMoodHeader';
// import PlanMoodHeaderFree from './PlanMoodHeaderFree';
import PlanHeader from './plan/PlanHeader';
import CalendarPage from './plan/calendar';
import Spinner from '../layout/Spinner';


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
        getResultsByIdToday(user._id);
        getResultsById(user._id);
        getSummary(user._id);

    }, [getResultsByIdToday, getResultsById, user._id]);

   console.log("plan results has", planResults);

   // console.log("today plan results has", todayPlanResults);

// export const Plan3 = () => {
    return (
        <Fragment>
          {planResults === null ? (
            <Spinner />
          ) : (
            <Fragment>
        <section>
            <div className="flex mx-auto p-4">
                <div className="flex flex-col flex-grow">
                    <PlanHeader />
                    <Line
                            data={data}
                            width={100}
                            height={15}
                            options={options}
                        />
                    <div>
                        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                            <li className="col-span-2 flex flex-col text-center bg-white rounded-xl divide-y divide-gray-200 border border-gray-400">
                                <div className="flex-1 flex flex-col p-8 items-center">
                                    <span className="text-beaBlueText text-sm">Calendar</span>
                                    <CalendarPage />
                                </div>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                            <li className="col-span-1 flex flex-col text-center bg-white rounded-xl divide-y divide-gray-200 border border-gray-400">
                                <div className="flex-1 flex flex-col p-8 items-center">
                                    <span className="text-beaBlueText text-sm">Goal</span>
                                    <span className="mt-6 p-3 bg-beaLightBlue rounded-3xl flex items-center justify-center">
                                        <img src={bowlIcon} alt="Bowl Icon" className="w-11" />
                                    </span>
                                    <span className="mt-6 text-gray-700 text-sm font-thin">The most important goal for you to have today</span>
                                    <h2 className="mt-0 text-gray-700 text-3xl font-light">Smaller amounts and stop eating when full</h2>
                                    <span className="mt-6 p-2 border-2 border-beaLightBlue rounded-2xl flex items-center justify-center">
                                        <img src={newspaperIcon} alt="Newspaper Icon" className="w-7" />
                                    </span>
                                    <span className="mt-1 text-gray-700 text-sm font-bold uppercase tracking-wider">BEA’S RECOMMENDED READ</span>
                                    <span className="mt-1 mb-3 text-gray-700 text-sm font-light">Healthy Eating: Recognizing Your Hunger Signals</span>
                                    <button type="button" className="btn-darkPurple">       
                                        Read Article
                                    </button>
                                </div>
                            </li>
                            <li className="col-span-1 flex flex-col text-center bg-white rounded-xl divide-y divide-gray-200 border border-gray-400">
                                <div className="flex-1 flex flex-col p-8 items-center">
                                    <span className="text-beaBlueText text-sm">Goal</span>
                                    <span className="mt-6 p-3 bg-beaLightBlue rounded-3xl flex items-center justify-center">
                                        <img src={bowlIcon}  alt="Bowl Icon" className="w-11" />
                                    </span>
                                    <span className="mt-6 text-gray-700 text-sm font-thin">The most important goal for you to have today</span>
                                    <h2 className="mt-0 text-gray-700 text-3xl font-light">Smaller amounts and stop eating when full</h2>
                                    <span className="mt-6 p-2 border-2 border-beaLightBlue rounded-2xl flex items-center justify-center">
                                        <img src={newspaperIcon} alt="Newspaper Icon" className="w-7" />
                                    </span>
                                    <span className="mt-1 text-gray-700 text-sm font-bold uppercase tracking-wider">BEA’S RECOMMENDED READ</span>
                                    <span className="mt-1 mb-3 text-gray-700 text-sm font-light">Healthy Eating: Recognizing Your Hunger Signals</span>
                                    <button type="button" className="btn-darkPurple">       
                                        Read Article
                                    </button>
                                </div>
                            </li>
                        </ul>
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
  
  export default connect(mapStateToProps, { getResultsById, getResultsByIdToday, getSummary })(Plan3);