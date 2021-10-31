
import React, { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResultsByIdOneWeek } from '../../../actions/postMotivateResults';
// import * as d3 from "d3";
// import GaugeChart from 'react-gauge-chart';
// import HeatMap from './HeatMap';
import Spinner from '../../layout/Spinner';
import ColumnChart from '../motivate/ColumnChart';
import TemptedGauge from './TemptedGauge';

const MiniMotivateWeekly = ({ user, getResultsByIdOneWeek, motivateResult: { summaryMotivateResults1wk } }) => {


  useEffect(() => {
    getResultsByIdOneWeek(user._id, 7);
  }, [getResultsByIdOneWeek, user._id]);
//    console.log("motivate weekly has", summaryMotivateResults1wk );
  let motivateBodyResults = "";
  if(summaryMotivateResults1wk.summaryStats){
  
    let speedometerInt = summaryMotivateResults1wk.summaryStats.avgTemptationLvl;
    motivateBodyResults = 
    <Fragment>
    {summaryMotivateResults1wk === null ? (
      <Spinner />
    ) : (

      <Fragment>
        <section>

        <div className="flex bg-white overflow-hidden border border-gray-400 rounded-xl mb-3 p-10 items-start">
                    <div className="flex flex-col w-full justify-center">
                        <div className="flex justify-center">
                            <h4 className="text-base font-medium text-beaBlueText font-bold mb-3 uppercase">
                                Eating Temptation Level
                            </h4>
                        </div>
                        <div className="flex flex-row overflow-hidden items-start">
                            <div className="flex flex-col items-center w-72">
                                <div>
                            {/* <div className="w-48 mb-3"> */}
                            <TemptedGauge avgTemptationLvl={summaryMotivateResults1wk.summaryStats.avgTemptationLvl} id={"gauge-chart05"}/>
                                </div>
                                {/* <h3 className="text-4xl text-gray-900 font-extralight mb-0">
                                    Very Tempted
                                </h3>
                                <p className="mt-1 text-sm text-gray-500 mb-0 text-center">
                                    to eat in a way not ideal
                                </p> */}
                            </div>
                            <div className="flex flex-col flex-grow mb-3 px-4 py-3 sm:px-6 items-center">

                                <div className="w-full h-48 mb-20">
                                <ColumnChart level={summaryMotivateResults1wk.summaryStats.temptedlevel} dates={summaryMotivateResults1wk.summaryStats.temptedDates}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">

                            <Link to='/motivate' className="btn-darkPurpleInvert">
                            More Motivate Results
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
    motivateBodyResults = 
        <Fragment><div>Loading</div></Fragment>

  }
  
    return (

      <Fragment>
        {motivateBodyResults}
    
      </Fragment>


    )}



MiniMotivateWeekly.propTypes = {
  getResultsByIdOneWeek: PropTypes.func.isRequired,
  motivateResult: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  motivateResult: state.motivateResult,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps, { getResultsByIdOneWeek })(MiniMotivateWeekly);