import React, { useEffect, useState, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResultsByIdToday, getResultsById, getSummary } from '../../actions/postPlanResults';
// import Login from '../auth/Login';
// import planIllustration from '../../img/plan-illustration.svg';
import smileyIconRound from '../../img/smiley-icon-round.svg';
import planIconWhite from '../../img/plan-icon-white.svg';
import {Line} from 'react-chartjs-2';
import chartTrendline from "chartjs-plugin-trendline";
import GaugeChart from 'react-gauge-chart';

import DashboardSections from './dashboard/DashboardSections';
import Videoselection from './Videoselection';
import { Videodata } from "./Videodata";
import PlanHeader from './dashboard/PlanHeader';
import MotivateHeader from './dashboard/MotivateHeader';
import MeditateHeader from './dashboard/MeditateHeader';
import PlanLineGraph from './plan/PlanLineGraph';
const testData = [0,3,1,2]
const testValues = 
['01', '02', '03', '04'];
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
    getResultsByIdToday,
     getSummary, 
    //  planResult: { planResults }, 
     planResult2: { planResults2 }, 
     todayPlanResult: {todayPlanResults} 
    }) => {
    //planResult: { planResults }, 
    // todayPlanResult: {todayPlanResults}

  useEffect(() => {
    //   getResultsByIdToday(user._id);
    //   getResultsById(user._id);
      getSummary(user._id);
      const today = new Date();
      getResultsByIdToday(user._id, today);
    //   if(planResults.length){
    //       thisResults = planResults[0];
    //       dataloaded = true;
    //       console.log(thisResults);
    //   }
  }, [getResultsByIdToday, getResultsById, getSummary, user._id]);

  let planBodyResults = "";
//export const Dashboard = () => {
    if(user._id){
  
        planBodyResults = 
        <section>
        <div className="flex mx-auto p-4">
            <div className="flex flex-col flex-grow">
                <div className="flex flex-row flex-grow mb-3">
                    <PlanHeader />
                    <MotivateHeader />
                    <MeditateHeader />
                    
                </div>
                <DashboardSections />

                <div className="flex bg-white overflow-hidden border border-gray-400 rounded-xl mb-3 p-10 items-start">
                    <div className="flex flex-col items-center w-72">
                        <img src={smileyIconRound} alt="Round Smiley Icon" className="w-36 mb-3" />
                        <p className="mt-1 max-w-2xl text-sm text-gray-500 mb-0">
                            You've been feeling 52%
                        </p>
                        <h3 className="text-4xl text-gray-900 font-extralight mb-0">
                            Pretty Good
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 mb-0 text-center">
                            about your eating these days. It’s mostly because of <strong>something physical</strong>.
                        </p>
                    </div>
                    <div className="flex flex-col flex-grow mb-3 px-4 py-3 sm:px-6 items-center">
                        <h4 className="text-base font-medium text-beaBlueText font-bold mb-3 uppercase">
                            Mood Eating
                        </h4>
                        <div className="w-full h-48 mb-20">

                            {/* <PlanLineGraph data={testData} values={testValues} /> */}
                            <Line
                                data={data}
                                width={100}
                                height={30}
                                options={options}
                            />
                        </div>
                        <button type="button" className="btn-darkPurpleInvert">        
                            More Plan Results
                        </button>
                    </div>
                </div>


                <div className="flex bg-white overflow-hidden border border-gray-400 rounded-xl mb-3 p-10 items-start">
                    <div className="flex flex-col items-center w-72">
                    <div className="w-48 mb-3">
                        <GaugeChart id="gauge-chart3"
                            nrOfLevels={2} 
                            colors={["#FFAD33", "#ECEFF1"]} 
                            arcsLength={[0.37, 0.63]}
                            arcWidth={0.45} 
                            percent={0.37} 
                            arcPadding={0}
                            cornerRadius={0}
                            textColor={"#000000"}
                            needleColor={"#58585E"}
                            needleBaseColor={"#CFD8DC"}
                            formatTextValue={value => 'Very tempted'}
                            hideText={true}
                            />
                        </div>
                        <h3 className="text-4xl text-gray-900 font-extralight mb-0">
                            Very Tempted
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 mb-0 text-center">
                            to eat in a way not ideal
                        </p>
                    </div>
                    <div className="flex flex-col flex-grow mb-3 px-4 py-3 sm:px-6 items-center">
                        <h4 className="text-base font-medium text-beaBlueText font-bold mb-3 uppercase">
                            Eating Temptation Level
                        </h4>
                        <div className="w-full h-48 mb-20">
                            <Line
                                data={data}
                                width={100}
                                height={30}
                                options={options}
                            />
                        </div>
                        <button type="button" className="btn-darkPurpleInvert">        
                            More Motivate Results
                        </button>
                    </div>
                </div>



                <div className="flex bg-white overflow-hidden border border-gray-400 rounded-xl mb-3 p-10 items-start">
                    <div className="flex flex-col flex-grow mb-3 px-4 py-3 sm:px-6 items-center">
                        <h4 className="text-base font-medium text-beaBlueText font-bold mb-3 uppercase">
                        FAVORITE MEDITATIONS
                        </h4>
                        <div className="w-full mb-10">

                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mr-4 gap-4 w-full">
                            {Videodata.map((data, key) => {
                                return (
                                    <div key={key}>
                                    <Videoselection
                                        id={data.id}
                                        title={data.title}
                                        length={data.length}
                                        img={data.img}
                                        imgalt={data.imgalt}
                                        vidurl={data.vidurl}
                                    />
                                    </div>
                                );
                                })}
                            </ul>

                        </div>
                        <button type="button" className="btn-darkPurpleInvert">        
                            More Meditations
                        </button>
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
        // <section>
        //     <div className="flex mx-auto p-4">
        //         <div className="flex flex-col flex-grow">
        //             <div className="flex flex-row flex-grow mb-3">
        //                 <PlanHeader />
        //                 <MotivateHeader />
        //                 <MeditateHeader />
                        
        //             </div>
        //             <DashboardSections />

        //             <div className="flex bg-white overflow-hidden border border-gray-400 rounded-xl mb-3 p-10 items-start">
        //                 <div className="flex flex-col items-center w-72">
        //                     <img src={smileyIconRound} alt="Round Smiley Icon" className="w-36 mb-3" />
        //                     <p className="mt-1 max-w-2xl text-sm text-gray-500 mb-0">
        //                         You've been feeling 52%
        //                     </p>
        //                     <h3 className="text-4xl text-gray-900 font-extralight mb-0">
        //                         Pretty Good
        //                     </h3>
        //                     <p className="mt-1 text-sm text-gray-500 mb-0 text-center">
        //                         about your eating these days. It’s mostly because of <strong>something physical</strong>.
        //                     </p>
        //                 </div>
        //                 <div className="flex flex-col flex-grow mb-3 px-4 py-3 sm:px-6 items-center">
        //                     <h4 className="text-base font-medium text-beaBlueText font-bold mb-3 uppercase">
        //                         Mood Eating
        //                     </h4>
        //                     <div className="w-full h-48 mb-20">

        //                         {/* <PlanLineGraph data={testData} values={testValues} /> */}
        //                         <Line
        //                             data={data}
        //                             width={100}
        //                             height={30}
        //                             options={options}
        //                         />
        //                     </div>
        //                     <button type="button" className="btn-darkPurpleInvert">        
        //                         More Plan Results
        //                     </button>
        //                 </div>
        //             </div>


        //             <div className="flex bg-white overflow-hidden border border-gray-400 rounded-xl mb-3 p-10 items-start">
        //                 <div className="flex flex-col items-center w-72">
        //                 <div className="w-48 mb-3">
        //                     <GaugeChart id="gauge-chart3"
        //                         nrOfLevels={2} 
        //                         colors={["#FFAD33", "#ECEFF1"]} 
        //                         arcsLength={[0.37, 0.63]}
        //                         arcWidth={0.45} 
        //                         percent={0.37} 
        //                         arcPadding={0}
        //                         cornerRadius={0}
        //                         textColor={"#000000"}
        //                         needleColor={"#58585E"}
        //                         needleBaseColor={"#CFD8DC"}
        //                         formatTextValue={value => 'Very tempted'}
        //                         hideText={true}
        //                         />
        //                     </div>
        //                     <h3 className="text-4xl text-gray-900 font-extralight mb-0">
        //                         Very Tempted
        //                     </h3>
        //                     <p className="mt-1 text-sm text-gray-500 mb-0 text-center">
        //                         to eat in a way not ideal
        //                     </p>
        //                 </div>
        //                 <div className="flex flex-col flex-grow mb-3 px-4 py-3 sm:px-6 items-center">
        //                     <h4 className="text-base font-medium text-beaBlueText font-bold mb-3 uppercase">
        //                         Eating Temptation Level
        //                     </h4>
        //                     <div className="w-full h-48 mb-20">
        //                         <Line
        //                             data={data}
        //                             width={100}
        //                             height={30}
        //                             options={options}
        //                         />
        //                     </div>
        //                     <button type="button" className="btn-darkPurpleInvert">        
        //                         More Motivate Results
        //                     </button>
        //                 </div>
        //             </div>



        //             <div className="flex bg-white overflow-hidden border border-gray-400 rounded-xl mb-3 p-10 items-start">
        //                 <div className="flex flex-col flex-grow mb-3 px-4 py-3 sm:px-6 items-center">
        //                     <h4 className="text-base font-medium text-beaBlueText font-bold mb-3 uppercase">
        //                     FAVORITE MEDITATIONS
        //                     </h4>
        //                     <div className="w-full mb-10">

        //                     <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mr-4 gap-4 w-full">
        //                         {Videodata.map((data, key) => {
        //                             return (
        //                                 <div key={key}>
        //                                 <Videoselection
        //                                     id={data.id}
        //                                     title={data.title}
        //                                     length={data.length}
        //                                     img={data.img}
        //                                     imgalt={data.imgalt}
        //                                     vidurl={data.vidurl}
        //                                 />
        //                                 </div>
        //                             );
        //                             })}
        //                         </ul>

        //                     </div>
        //                     <button type="button" className="btn-darkPurpleInvert">        
        //                         More Meditations
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="w-72 min-w-72 pl-3">
        //             <div className="flex justify-center items-center w-full h-72 rounded-xl bg-gray-300 w-72">
        //                 <button type="button" className="relative inline-flex items-center px-6 py-2 shadow-none text-sm font-medium rounded-full text-beaDarkPurple hover:bg-beaDarkPurple hover:text-white transition-all border-t border-b border-l border-r border-beaDarkPurple group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        //                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
        //                 Call to Action
        //                 </button>
        //             </div>
        //         </div>  
        //     </div>
        // </section>      

    )
}

Dashboard.propTypes = {
    getResultsByIdToday: PropTypes.func.isRequired,
    getResultsById: PropTypes.func.isRequired,
    getSummary:  PropTypes.func.isRequired,
    planResult: PropTypes.object.isRequired,
    planResult2: PropTypes.object.isRequired,
    todayPlanResult: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    planResult: state.planResult,
    planResult2: state.planResult2,
    todayPlanResult: state.todayPlanResult,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  });
  
  export default connect(mapStateToProps, { getResultsById, getResultsByIdToday, getSummary })(Dashboard);

//export default Dashboard;