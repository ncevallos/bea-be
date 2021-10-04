import React, { useEffect, useState, Fragment } from 'react'
import { getResultsByIdToday, getResultsById, getSummary } from '../../../actions/postPlanResults';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PlanLineGraph from './PlanLineGraph';


const PlanMonthlyHeader = ({ user, 
        getSummary,
        planResult2: { planResults2 }
        }) => {
    
      useEffect(() => {
        getSummary(user._id);
     
      }, [getSummary, user._id]);
      console.log("plan monthly header results has", planResults2);

    let planBodyResults = "";
    if(planResults2.summaryStats){
    
        planBodyResults = 
          <Fragment>
            <PlanLineGraph data={planResults2.dates[0]} values={planResults2.values[0]} />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                 <div className="col-span-1 flex flex-col text-center bg-white rounded-xl border border-gray-400 p-4">
                    <span className="text-beaBlueText text-sm">FAVORITE GOAL</span>
                                <div className="flex flex-row">
                                    <div className="flex-1 flex flex-col items-center">
                                        {/* <span className="mt-6 p-3 bg-beaLightBlue rounded-3xl flex items-center justify-center">
                                            <img src={bowlIcon} alt="Bowl Icon" className="w-11" />
                                        </span>
                                        <h2 className="mt-0 text-gray-700 text-3xl font-light">{planResults2.summaryStats.favgoalpct}%</h2> */}
                                        Mood eating was: <br/>
                                        {planResults2.summaryStats.great} % Great <br/>
                                        {planResults2.summaryStats.good} % Good <br/>
                                        {planResults2.summaryStats.notgood} % Not Good <br/>
                                        {planResults2.summaryStats.horrible} % Horrible <br/>
                                        {planResults2.summaryStats.stayedontrack} <br/>
                                        helped you stay on track
                                        {planResults2.summaryStats.stayedontrackpct}%
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col text-center bg-white rounded-xl border border-gray-400 p-4">
                                <div className="flex-1 flex flex-col items-center">
                                    <span className="text-beaBlueText text-sm">Favorite Goal</span>
                                    <span className="mt-6 text-gray-700 text-sm font-light">

                                        <h2 className="mt-0 text-gray-700 text-xl leading-6 font-medium">{planResults2.summaryStats.favgoal} </h2>
                                        {planResults2.summaryStats.favgoalpct} % <br/>
                                        with {planResults2.summaryStats.favgoal2}</span>
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col text-center bg-white rounded-xl border border-gray-400 p-4">
                                <div className="flex-1 flex flex-col items-center">
                                    <span className="text-beaBlueText text-sm">Favorite Action</span>
                                    <span className="mt-6 text-gray-700 text-sm font-light">
                                    <h2 className="mt-0 text-gray-700 text-xl leading-6 font-medium">{planResults2.summaryStats.favaction}</h2>
                                    anytime you have an urge to eat <br/>
                                        {planResults2.summaryStats.favactionpct} %</span>
                                </div>
                            </div>
                        </div>
          </Fragment>
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
PlanMonthlyHeader.propTypes = {
   // getResultsByIdToday: PropTypes.func.isRequired,
    getResultsById: PropTypes.func.isRequired,
    getSummary:  PropTypes.func.isRequired,
    // planResult: PropTypes.object.isRequired,
    planResult2: PropTypes.object.isRequired,
    // todayPlanResult: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    planResult2: state.planResult2,
    // todayPlanResult: state.todayPlanResult,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  });
  
  export default connect(mapStateToProps, { getSummary})(PlanMonthlyHeader);
