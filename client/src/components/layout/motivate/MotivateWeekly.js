
import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResultsByIdOneWeek } from '../../../actions/postMotivateResults';
// import * as d3 from "d3";
// import GaugeChart from 'react-gauge-chart';
// import HeatMap from './HeatMap';
import Spinner from '../../layout/Spinner';
import TreeMap from './TreeMap';
import SimpleGauge from './SimpleGauge';
import BarChart from './BarChart';
import AreaChart from './AreaChart';
import ColumnChart from './ColumnChart';
import TemptedGauge from './TemptedGauge';

const MotivateWeekly = ({ user, getResultsByIdOneWeek, motivateResult: { summaryMotivateResults1wk } }) => {


  useEffect(() => {
    getResultsByIdOneWeek(user._id, 7);
  }, [getResultsByIdOneWeek, user._id]);
   console.log("motivate weekly has", summaryMotivateResults1wk );
  let motivateBodyResults = "";
  if(summaryMotivateResults1wk.summaryStats){
  
    motivateBodyResults = 
    <Fragment>
    {summaryMotivateResults1wk === null ? (
      <Spinner />
    ) : (
      <Fragment>
        <section>
          {/* <div className="flex mx-auto p-4">
              <div className="flex flex-col flex-grow"> */}
                  <div className="border border-gray-200 rounded-lg p-10 my-4">
                    <div className="w-full flex flex-row items-center">
                      <TemptedGauge avgTemptationLvl={summaryMotivateResults1wk.summaryStats.avgTemptationLvl} id={"gauge-chart05"}/>
                      {/* <div className="w-96 items-center">
                          <GaugeChart id="gauge-chart3"
                              nrOfLevels={2} 
                              colors={["#FFAD33", "#ECEFF1"]} 
                              arcsLength={[0.37, 0.63]}
                              arcWidth={0.45} 
                              percent={0.80} 
                              arcPadding={0}
                              cornerRadius={0}
                              textColor={"#000000"}
                              needleColor={"#58585E"}
                              needleBaseColor={"#CFD8DC"}
                              formatTextValue={value => 'Very tempted'}
                              hideText={true}
                              />
                              <p className="text-xl">tempted</p>
                              <p>to eat in a way not ideal</p>
                          </div> */}
                          {/* Comment above here */}
                        <div className="w-48">
                          <ColumnChart level={summaryMotivateResults1wk.summaryStats.temptedlevel} dates={summaryMotivateResults1wk.summaryStats.temptedDates}/>
                        </div>
                    </div>
                    <div className="flex w-full bg-beaOrange px-2 py-1 py-0 rounded-full flex items-center justify-between">
                        <div className="bg-gray-50 bg-opacity-50 uppercase font-bold text-beaOrange py-3 px-4 text-xl rounded-full w-56 text-center">BEA's Tips</div>
                        <div className="text-white ml-3 mr-3 text-sm">Oh no! It looks like you’re in the beginning stages of getting off track. Bea has some tips to make sure you don’t derail.</div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                  </div> 

                  <div className="flex flex-col justify-center border-gray-200 rounded-t-lg rounded-b-0 border-t border-l border-r border-b-0 p-10 mt-4 mb-0">
                        <span className="text-beaBlueText text-sm font-bold uppercase text-center">Visualizations: Triggers &amp; Mood Evaluations</span>
                        <span className="mt-4 mb-0 text-gray-700 font-light text-center">Favorite food you planned to eat next</span>
                  <TreeMap data={summaryMotivateResults1wk.plan2eat}/>
                    </div>
                  <div className="flex flex-grow w-full">
                    <div className="w-full text-center border-t border-l border-b border-r-0 border-gray-200 rounded-t-0 rounded-bl-lg rounded-br-0 p-10 mr-0">
                    <span className="mt-6 text-gray-700 text-sm font-thin">Reason why you chose the foods</span><br/>
                    <h2 className="mt-0 text-gray-700 text-2xl font-regular mb-12">{summaryMotivateResults1wk.summaryStats.whyHungry}</h2>
                    <SimpleGauge />
                    <span className="mt-6 text-gray-700 text-sm font-thin">If you overindulged, you felt</span><br/>
                    <h2 className="mt-0 text-gray-700 text-2xl font-regular mb-12">{summaryMotivateResults1wk.summaryStats.overindulgeresult}</h2>
                    <SimpleGauge />
                    <span className="mt-6 text-gray-700 text-sm font-thin">If you made a different choice, you felt</span><br/>
                    <h2 className="mt-0 text-gray-700 text-2xl font-regular">{summaryMotivateResults1wk.summaryStats.differentChoice}</h2>
                    </div>
                    <div className="w-full border border-gray-200 rounded-t-0 rounded-br-lg rounded-bl-0 p-0 ml-0">
                        <div className="w-full border-b border-gray-200 p-10 text-center">
                          <h2 className="mt-0 text-gray-700 text-lg font-extralight">How you usually felt during each eating phase</h2>
                          <AreaChart data={summaryMotivateResults1wk.summaryStats.phaseFeel}/>
                        </div>
                        <div className="w-full p-10 text-center">
                          <h2 className="mt-0 text-gray-700 text-lg font-extralight">How long you thought each eating phase lasted</h2>
                          <BarChart data={summaryMotivateResults1wk.summaryStats.lengthFeel}/>
                        </div>
                    </div>
                  </div>
              {/* </div>
            </div> */}
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



MotivateWeekly.propTypes = {
  getResultsByIdOneWeek: PropTypes.func.isRequired,
  motivateResult: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  motivateResult: state.motivateResult,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps, { getResultsByIdOneWeek })(MotivateWeekly);