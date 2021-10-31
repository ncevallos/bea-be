import React, { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResultsByIdToday, getResultsById, getSummary } from '../../actions/postPlanResults';
import { getMeditateResultsById, getTodayMeditateResultsById } from '../../actions/meditateResults';
import { getMotivResultsByIdToday } from '../../actions/postMotivateResults';
import smileyIconRound from '../../img/smiley-icon-round.svg';
import {Line} from 'react-chartjs-2';
import GaugeChart from 'react-gauge-chart';
import DashboardSections from './dashboard/DashboardSections';
import RecentVideos from './meditate/RecentVideos';
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
  const Dashboard = ({ user, 
    // getResultsById, 
    getMeditateResultsById,
    getTodayMeditateResultsById,
    getResultsByIdToday,
    getMotivResultsByIdToday,
     getSummary, 
     planResult2: { planResults2 }, 
     meditateResult: { meditateResults }, 
     todayPlanResult: {todayPlanResults},
     todayMeditateResult: {todayMeditateResults},
     todayMotivateResult: { todayMotivateResults }
    }) => {

   useEffect(() => {
    getMeditateResultsById(user._id);
    getTodayMeditateResultsById(user._id);
        // getSummary(user._id);
      const today = new Date();
       getResultsByIdToday(user._id, today);
       getMotivResultsByIdToday(user._id);
   }, [getResultsByIdToday, getMeditateResultsById, getSummary, user._id]);
    console.log("meditate results has this in it", meditateResults)
    console.log("motivate header has", todayMotivateResults );
  let planBodyResults = "";
  let recentVidResults = "";
  let meditateHeader = "";
  let planHeader = "";
  let motivateHeader = "";
        if(meditateResults){
            recentVidResults = 
            <RecentVideos results={meditateResults}/> 
        }
        else {
            recentVidResults = 
                <Fragment><div>No Recent Video Results</div></Fragment>
        
          }
          if(todayMeditateResults.date){
            meditateHeader = 
            <div className="flex flex-row items-center pb-2">
            <div className="mr-2">
               <svg width="23" height="22" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M26.0624 12.7197C26.0624 19.625 20.2438 25.2197 13.0624 25.2197C5.88093 25.2197 0.0623779 19.625 0.0623779 12.7197C0.0623779 5.81448 5.88093 0.219727 13.0624 0.219727C20.2438 0.219727 26.0624 5.81448 26.0624 12.7197ZM11.5585 19.3382L21.2036 10.064C21.3608 9.91276 21.4491 9.70771 21.4491 9.49392C21.4491 9.28013 21.3608 9.07508 21.2036 8.92386L20.0179 7.78323C19.94 7.70833 19.8476 7.64891 19.7458 7.60837C19.644 7.56783 19.5349 7.54697 19.4248 7.54697C19.3146 7.54697 19.2055 7.56783 19.1038 7.60837C19.002 7.64891 18.9095 7.70833 18.8317 7.78323L10.9656 15.3467L7.2931 11.8155C7.21522 11.7406 7.12275 11.6812 7.02098 11.6406C6.91921 11.6001 6.81014 11.5792 6.69998 11.5792C6.58982 11.5792 6.48074 11.6001 6.37897 11.6406C6.2772 11.6812 6.18474 11.7406 6.10685 11.8155L4.92113 12.9561C4.76396 13.1073 4.67567 13.3124 4.67567 13.5262C4.67567 13.74 4.76396 13.945 4.92113 14.0962L10.3727 19.3382C10.53 19.4893 10.7433 19.5742 10.9656 19.5742C11.1879 19.5742 11.4012 19.4893 11.5585 19.3382Z" fill="white"/>
                </svg>
            </div>
            <div className="text-sm text-white line-through">Meditate with Bea</div>
        </div>
          }
          else {
            meditateHeader = 
            <div className="flex flex-row items-center pb-2">
            <div className="mr-2">
                <svg width="23" height="22" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="13.2709" cy="13.6939" r="11.2085" stroke="white" stroke-width="3"/>
                </svg>
            </div>
            <div className="text-sm text-white">Meditate with Bea</div>
        </div>
            }
            if(todayMotivateResults.plan2eat){
                motivateHeader = 
                <div className="flex flex-row items-center pb-2">
                <div className="mr-2">
                   <svg width="23" height="22" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M26.0624 12.7197C26.0624 19.625 20.2438 25.2197 13.0624 25.2197C5.88093 25.2197 0.0623779 19.625 0.0623779 12.7197C0.0623779 5.81448 5.88093 0.219727 13.0624 0.219727C20.2438 0.219727 26.0624 5.81448 26.0624 12.7197ZM11.5585 19.3382L21.2036 10.064C21.3608 9.91276 21.4491 9.70771 21.4491 9.49392C21.4491 9.28013 21.3608 9.07508 21.2036 8.92386L20.0179 7.78323C19.94 7.70833 19.8476 7.64891 19.7458 7.60837C19.644 7.56783 19.5349 7.54697 19.4248 7.54697C19.3146 7.54697 19.2055 7.56783 19.1038 7.60837C19.002 7.64891 18.9095 7.70833 18.8317 7.78323L10.9656 15.3467L7.2931 11.8155C7.21522 11.7406 7.12275 11.6812 7.02098 11.6406C6.91921 11.6001 6.81014 11.5792 6.69998 11.5792C6.58982 11.5792 6.48074 11.6001 6.37897 11.6406C6.2772 11.6812 6.18474 11.7406 6.10685 11.8155L4.92113 12.9561C4.76396 13.1073 4.67567 13.3124 4.67567 13.5262C4.67567 13.74 4.76396 13.945 4.92113 14.0962L10.3727 19.3382C10.53 19.4893 10.7433 19.5742 10.9656 19.5742C11.1879 19.5742 11.4012 19.4893 11.5585 19.3382Z" fill="white"/>
                    </svg>
                </div>
                <div className="text-sm text-white line-through">Do motivational activities to stay on track</div>
            </div>
              }
              else {
                motivateHeader = 
                <div className="flex flex-row items-center pb-2">
                <div className="mr-2">
                    <svg width="23" height="22" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13.2709" cy="13.6939" r="11.2085" stroke="white" stroke-width="3"/>
                    </svg>
                </div>
                <div className="text-sm text-white">Do motivational activities to stay on track</div>
            </div>
                }
        if(todayPlanResults.howdoyoufeel){
            planHeader = 
                <div className="flex flex-row items-center pb-2 border-b border-gray-50 border-opacity-50">
                <div className="mr-2">
                    <svg width="23" height="22" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.0624 12.7197C26.0624 19.625 20.2438 25.2197 13.0624 25.2197C5.88093 25.2197 0.0623779 19.625 0.0623779 12.7197C0.0623779 5.81448 5.88093 0.219727 13.0624 0.219727C20.2438 0.219727 26.0624 5.81448 26.0624 12.7197ZM11.5585 19.3382L21.2036 10.064C21.3608 9.91276 21.4491 9.70771 21.4491 9.49392C21.4491 9.28013 21.3608 9.07508 21.2036 8.92386L20.0179 7.78323C19.94 7.70833 19.8476 7.64891 19.7458 7.60837C19.644 7.56783 19.5349 7.54697 19.4248 7.54697C19.3146 7.54697 19.2055 7.56783 19.1038 7.60837C19.002 7.64891 18.9095 7.70833 18.8317 7.78323L10.9656 15.3467L7.2931 11.8155C7.21522 11.7406 7.12275 11.6812 7.02098 11.6406C6.91921 11.6001 6.81014 11.5792 6.69998 11.5792C6.58982 11.5792 6.48074 11.6001 6.37897 11.6406C6.2772 11.6812 6.18474 11.7406 6.10685 11.8155L4.92113 12.9561C4.76396 13.1073 4.67567 13.3124 4.67567 13.5262C4.67567 13.74 4.76396 13.945 4.92113 14.0962L10.3727 19.3382C10.53 19.4893 10.7433 19.5742 10.9656 19.5742C11.1879 19.5742 11.4012 19.4893 11.5585 19.3382Z" fill="white"/>
                    </svg>
                </div>
                <div className="text-sm text-white line-through">Create your Plan for the day</div>
            </div>
              }
        else {
            planHeader = 
                <div className="flex flex-row items-center pb-2 border-b border-gray-50 border-opacity-50">
                <div className="mr-2">
                <svg width="23" height="22" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="13.2709" cy="13.6939" r="11.2085" stroke="white" stroke-width="3"/>
                </svg>
                </div>
                <div className="text-sm text-white ">Create your Plan for the day</div>
            </div>

              
                }
        if(user){
  
        planBodyResults = 
        <section>
        <div className="flex mx-auto p-4">
            <div className="flex flex-col flex-grow">
                <div className="flex flex-row flex-grow mb-3">
                    <div class="flex justify-center flex-col w-full bg-gradient-to-r from-purpleGradientStart to-purpleGradientMiddle rounded-xl pt-8 pb-8 pr-10 pl-10">
                        <div className="flex justify-center">
                            <span className="text-white uppercase tracking-wide font-bold text-sm mb-4">To-do today</span>
                        </div>
                        <div className="flex flex-col w-full justify-start space-y-2">
                            {planHeader}
                            {motivateHeader}
                            {meditateHeader}
   
                        </div>
                    </div>
                </div>
                    <DashboardSections />
                <div className="flex bg-white overflow-hidden border border-gray-400 rounded-xl mb-3 p-10 items-start">
                    <div className="flex flex-col flex-grow mb-3 px-4 py-3 sm:px-6 items-center">
                        <h4 className="text-base font-medium text-beaBlueText font-bold mb-3 uppercase">
                        FAVORITE MEDITATIONS
                        </h4>
                        <div className="w-full mb-10">
                        {/* <RecentVideos results={meditateResults}/>  */}
                        {recentVidResults}
                        </div>
                        <Link to='/meditate' className="btn-darkPurpleInvert">
                        More Meditations
                        </Link>
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
      }
      else {
        planBodyResults = 
            <Fragment><div>Loading</div></Fragment>
    
      }
    return (
        <Fragment>
            {planBodyResults}
        </Fragment>
  

    )
}

Dashboard.propTypes = {
    getResultsByIdToday: PropTypes.func.isRequired,
    getMeditateResultsById: PropTypes.func.isRequired,
    getTodayMeditateResultsById: PropTypes.func.isRequired,
    getMotivResultsByIdToday: PropTypes.func.isRequired,
    getResultsById: PropTypes.func.isRequired,
    getSummary:  PropTypes.func.isRequired,
    planResult: PropTypes.object.isRequired,
    planResult2: PropTypes.object.isRequired,
    motivateResult: PropTypes.object.isRequired,
    todayMotivateResult: PropTypes.object.isRequired,
    todayPlanResult: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    motivateResult: state.motivateResult,
    meditateResult: state.meditateResult,
    todayMeditateResult: state.todayMeditateResult,
    todayMotivateResult: state.motivateResult,
    planResult: state.planResult,
    planResult2: state.planResult2,
    todayPlanResult: state.todayPlanResult,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  });
  
  export default connect(mapStateToProps, { getResultsById, getResultsByIdToday, getMeditateResultsById, getTodayMeditateResultsById, getSummary, getMotivResultsByIdToday })(Dashboard);

//export default Dashboard;