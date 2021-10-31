
import React, { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getThreeMonthSummary } from '../../../actions/postPlanResults';
import Spinner from '../../layout/Spinner';
import PlanLineGraph from '../plan/PlanLineGraph';
import smileyIconRound from '../../../img/smiley-icon-round.svg';

const MiniPlanThreeMonth = ({ user, getThreeMonthSummary, planResult: { summaryPlanResult3m } }) => {


  useEffect(() => {
    getThreeMonthSummary(user._id);
  }, [getThreeMonthSummary, user._id]);
   console.log("plan weekly header has", summaryPlanResult3m );
  let planBodyResults = "";
  // if(summaryPlanResult1wk.summaryStats){
    if(summaryPlanResult3m){
    // let speedometerInt = summaryPlanResult1wk.summaryStats.avgTemptationLvl;
    planBodyResults = 
    <Fragment>
    {summaryPlanResult3m === null ? (
      <Spinner />
    ) : (

      <Fragment>
        <section>

             <div className="flex bg-white overflow-hidden border border-gray-400 rounded-xl mb-3 p-10 items-start">
                    <div className="flex flex-col w-full justify-center">
                        <div className="flex justify-center">
                            <h4 className="text-base font-medium text-beaBlueText font-bold mb-3 uppercase">
                                Mood Eating
                            </h4>
                        </div>
                        <div className="flex flex-row overflow-hidden items-start">
                            <div className="flex flex-col items-center w-72">
                                <img src={smileyIconRound} alt="Round Smiley Icon" className="w-36 mb-3" />
                                <p className="mt-1 max-w-2xl text-sm text-gray-500 mb-0">
                                    You've been feeling 52%
                                </p>
                                <h3 className="text-4xl text-gray-900 font-extralight mb-0">
                                    Pretty Good
                                </h3>
                                <p className="mt-1 text-sm text-gray-500 mb-0 text-center">
                                    about your eating these days. It’s mostly because of <strong>{summaryPlanResult3m.summaryStats.stayedontrack}</strong>.
                                </p>
                            </div>
                            <div className="flex flex-col flex-grow mb-3 px-4 py-3 sm:px-6 items-center">
                                <div className="w-full h-48 mb-20">

                                <PlanLineGraph data={summaryPlanResult3m.dates[0]} values={summaryPlanResult3m.values[0]} />
                                    {/* <Line
                                        data={data}
                                        width={100}
                                        height={30}
                                        options={options}
                                    /> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Link to='/plan' className="btn-darkPurpleInvert">
                            More Plan Results
                            </Link>
                        </div>                   
                    </div>
                </div>
                
          </section>
      </Fragment>
    )}
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


    )}



MiniPlanThreeMonth.propTypes = {
  getThreeMonthSummary: PropTypes.func.isRequired,
  planResult: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  planResult: state.planResult,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps, { getThreeMonthSummary })(MiniPlanThreeMonth);