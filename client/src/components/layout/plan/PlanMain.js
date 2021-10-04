import React, { useEffect, useState, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResultsByIdToday, getResultsById, getSummary } from '../../../actions/postPlanResults';
import PlanHeader from './PlanHeader';
import PlanBody from './PlanBody';
import Spinner from '../../layout/Spinner';


const PlanMain = ({ user, 
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
    //   if(planResults.length){
    //       thisResults = planResults[0];
    //       dataloaded = true;
    //       console.log(thisResults);
    //   }
  }, [getResultsByIdToday, getResultsById, getSummary, user._id]);
//   console.log("plan results has", planResults);
  console.log("today plan results has", todayPlanResults);
  console.log("sumarry plan results has", planResults2);
  let planBodyResults = "";
  if(planResults2.summaryStats){
  
    planBodyResults = 
        <Fragment>

        <PlanHeader todayPlanResults={todayPlanResults}/>
        {/* <PlanLineGraph planResults={planResults2} /> */}
        <PlanBody planResults={planResults2}/>
        </Fragment>
  }
  else {
    planBodyResults = 
        <Fragment><div>Loading</div></Fragment>

  }
  
    return (
      <Fragment>
        {planResults2 === null ? (
          <Spinner />
        ) : (
          <Fragment>
          <section className="flex flex-col mt-gutter mx-gutter">
            <div className="flex">
                <div className="flex flex-col flex-grow">
              {/* <PlanHeader todayPlanResults={todayPlanResults}/>
                <PlanBody planResults={planResults}/> */}
                {   planBodyResults}
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
          </Fragment>
        )}
      </Fragment>
    );
  };
  
  PlanMain.propTypes = {
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
  
  export default connect(mapStateToProps, { getResultsById, getResultsByIdToday, getSummary })(PlanMain);
  