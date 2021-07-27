import React, { useEffect, useState, Fragment } from 'react'
import bowlIcon from '../../../img/bowl-icon.svg';
import newspaperIcon from '../../../img/newspaper-icon.svg';
import {Line} from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResultsByIdToday, getResultsById, getSummary } from '../../../actions/postPlanResults';
import chartTrendline from "chartjs-plugin-trendline";
import PlanMoodHeader from './../PlanMoodHeader';
import PlanMoodHeaderFree from './../PlanMoodHeaderFree';
import PlanHeader from './PlanHeader';
import PlanBody from './PlanBody';
import CalendarPage from './calendar';
import Spinner from '../../layout/Spinner';
import PlanLineGraph from '../PlanLineGraph';


const PlanMain = ({ user, getResultsById, getResultsByIdToday, planResult: { planResults }, todayPlanResult: {todayPlanResults} }) => {
    //planResult: { planResults }, 
    //todayPlanResult: {todayPlanResults}

  useEffect(() => {
      getResultsByIdToday(user._id);
      getResultsById(user._id);
    //   if(planResults.length){
    //       thisResults = planResults[0];
    //       dataloaded = true;
    //       console.log(thisResults);
    //   }
  }, [getResultsByIdToday, getResultsById, user._id]);
  console.log("plan results has", planResults);
  console.log("today plan results has", todayPlanResults);
  let planBodyResults = "";
  if(planResults.summaryStats){
  
    planBodyResults = 
        <Fragment>

        <PlanHeader todayPlanResults={todayPlanResults}/>
        <PlanLineGraph planResults={planResults} />
        <PlanBody planResults={planResults}/>
        </Fragment>
  }
  else {
    planBodyResults = 
        <Fragment><div>Loading</div></Fragment>

  }
  
    return (
      <Fragment>
        {planResults === null ? (
          <Spinner />
        ) : (
          <Fragment>
          <section>
              <div className="flex mx-auto p-4">
                  <div className="flex flex-col flex-grow">
              {/* <PlanHeader todayPlanResults={todayPlanResults}/>
                <PlanBody planResults={planResults}/> */}
                {planBodyResults}
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
    );
  };
  
  PlanMain.propTypes = {
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
  
  export default connect(mapStateToProps, { getResultsById, getResultsByIdToday, getSummary })(PlanMain);
  