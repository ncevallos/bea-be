import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
// import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResultsByIdToday, getResultsById, getSummary } from '../../../actions/postPlanResults';
import PlanMonthlyLineItem from './PlanMonthlyLineItem';
import PlanMonthlyHeader from './PlanMonthlyHeader';

  const Plan3 = ({ user, getResultsById, getResultsByIdToday, getSummary, planResult: { planResults }, planResult2: { planResults2 } }) => {
      //planResult: { planResults }, 
      //todayPlanResult: {todayPlanResults}
        console.log('user in plan monthly has', user._id);
    useEffect(() => {
        const today = new Date();
        getResultsById(user._id, today);
        getSummary(user._id);
        // if(planResults.length){
        //     thisResults = planResults[0];
        //     dataloaded = true;
        //     console.log(thisResults);
        // }
    // }, [getResultsByIdToday, user._id], [getResultsById, user._id]);
}, [getResultsByIdToday, getResultsById, getSummary, user._id]);
    // let dataloaded = false;
    // let thisResults = [];
   console.log("plan results has", planResults);
   console.log("plane results 2 has", planResults2)

   // console.log("today plan results has", todayPlanResults);

// export const Plan3 = () => {
    return (
        <section>
            <div className="flex mx-auto p-4">
                <div className="flex flex-col flex-grow">
                    <div className="dateHeader text-center items-center mb-gutter">
                            <label className="flex content-center mb-0">   
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="align-middle pt-0.5">October 2021</span>
                            </label>
                    </div>

                    <PlanMonthlyHeader/>

                    <div className="flex flex-col max-w-full overflow-hidden mb-gutter">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200">
                                     {planResults.map((planResult) => (

                                            <PlanMonthlyLineItem
                                            userSubmission={planResult.userSubmission}
                                            date = {planResult.date}
                                            _id = {planResult._id}
                                            plangoal = {planResult.plangoal}
                                            plangoal2 = {planResult.plangoal2}
                                            plangoal5 = {planResult.plangoal5}
                                            howdoyoufeel = {planResult.howdoyoufeel}
                                            />
                                ))} 
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>



                    <div className="flex flex-row justify-between">
                        <Link to='/PlanMonthly' className="flex flex-row items-center navigateButton px-3">
                            <svg className="w-4 mr-1.5 ml-0" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.74 8.21045L2.78 8.21045" stroke="#7B48CB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.23996 13.9604L2.4375 8.23375L8.23996 2.46045" stroke="#7B48CB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            September 2021
                        </Link>
                        <Link to='/PlanMonthly' className="flex flex-row items-center navigateButton px-3">
                            November 2021
                            <svg className="w-4 ml-1.5" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.45043 7.78955L14.4104 7.78955" stroke="#7B48CB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.95047 2.03955L14.7529 7.76625L8.95047 13.5396" stroke="#7B48CB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </Link>
                    </div>




                </div>
                <div className="flex flex-shrink-0 ml-gutter w-promo">
                      <div className="flex justify-center items-center w-full h-72 rounded-md bg-gray-300 w-full p-2">
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
    getSummary:  PropTypes.func.isRequired,
    planResult2: PropTypes.object.isRequired,
    todayPlanResult: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    planResult2: state.planResult2,
    planResult: state.planResult,
    todayPlanResult: state.todayPlanResult,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  });
  
  export default connect(mapStateToProps, { getResultsById, getResultsByIdToday, getSummary })(Plan3);