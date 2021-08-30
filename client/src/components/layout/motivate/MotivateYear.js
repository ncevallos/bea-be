
import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResultsByIdOneYear } from '../../../actions/postMotivateResults';
import * as d3 from "d3";
import GaugeChart from 'react-gauge-chart';
import Spinner from '../../layout/Spinner';
import TreeMap from './TreeMap';
import SimpleGauge from './SimpleGauge';
import BarChart from './BarChart';
import AreaChart from './AreaChart';
import HeatMap from './HeatMap';
import ColumnChart from './ColumnChart';
import TemptedGauge from './TemptedGauge';

const MotivateYear = ({ user, getResultsByIdOneYear, motivateResult: { summaryMotivateResults1y } }) => {


  useEffect(() => {
    getResultsByIdOneYear(user._id, 365);
  }, [getResultsByIdOneYear, user._id]);
  // console.log("motivate weekly has", summaryMotivateResults1y );
  let motivateBodyResults = "";
  if(summaryMotivateResults1y.summaryStats){
  
    motivateBodyResults = 
    <Fragment>
    {summaryMotivateResults1y === null ? (
      <Spinner />
    ) : (
      <Fragment>
        <section>
          {/* <div className="flex mx-auto p-4">
              <div className="flex flex-col flex-grow"> */}
                  <div className="border border-gray-200 rounded-xl p-10 my-4">
                    <TemptedGauge avgTemptationLvl={summaryMotivateResults1y.summaryStats.avgTemptationLvl}/>
                    <div className="w-48">

                        <ColumnChart level={summaryMotivateResults1y.summaryStats.temptedlevel} dates={summaryMotivateResults1y.summaryStats.temptedDates}/>
            
                      </div>
                    <div className="w-full bg-beaOrange p-2 rounded-full flex items-center justify-between">
                        <div className="bg-gray-50 bg-opacity-50 uppercase font-bold text-beaOrange py-3 px-4 text-xl rounded-full">BEA's Tips</div>
                        <div className="m-3 text-lg text-white">Oh no! It looks like you’re in the beginning stages of getting off track. Bea has some tips to make sure you don’t derail.</div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                  </div> 
                  <div className="flex flex-grow w-full">
                    <div className="w-full border border-gray-200 rounded-xl p-10 mr-2">
                        <div className="text-beaDarkBlue uppercase text-center font-bold">Visualizations: Triggers</div>
                        <h2 className="mt-0 text-gray-700 text-3xl font-light">Favorite food you planned to eat next</h2>
                        <TreeMap data={summaryMotivateResults1y.plan2eat}/>
                        <p>(below is the data to be graphed)</p><br/>
                      {/* {summaryMotivateResults1y.planned2eat.map((item, index) => (
                        <p key={index}>{item} - (one entry)</p>
                    ))} */}
                    <span className="mt-6 text-gray-700 text-sm font-thin">Reason why you chose the foods</span><br/>
                    <h2 className="mt-0 text-gray-700 text-3xl font-light">{summaryMotivateResults1y.summaryStats.whyHungry}</h2>
                    <SimpleGauge />
                    <span className="mt-6 text-gray-700 text-sm font-thin">If you overindulged, you felt</span><br/>
                    <h2 className="mt-0 text-gray-700 text-3xl font-light">{summaryMotivateResults1y.summaryStats.overindulgeresult}</h2>
                    <SimpleGauge />
                    <span className="mt-6 text-gray-700 text-sm font-thin">If you made a different choice, you felt</span><br/>
                    <h2 className="mt-0 text-gray-700 text-3xl font-light">{summaryMotivateResults1y.summaryStats.differentChoice}</h2>
                    </div>
                    <div className="w-full border border-gray-200 rounded-xl p-10 ml-2">
                        <div className="text-beaDarkBlue uppercase text-center font-bold">Visualizations: Evaluating Mood</div>
                        <h2 className="mt-0 text-gray-700 text-3xl font-light">Favorite food you planned to eat next</h2>
                        <TreeMap  data={summaryMotivateResults1y.plan2eat}/>
                        <h2 className="mt-0 text-gray-700 text-3xl font-light">How you usually felt during each eating phase</h2>
                        <AreaChart data={summaryMotivateResults1y.summaryStats.phaseFeel}/>
                        <h2 className="mt-0 text-gray-700 text-3xl font-light">How long you thought each eating phase lasted</h2>
                        <BarChart data={summaryMotivateResults1y.summaryStats.lengthFeel}/>
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



MotivateYear.propTypes = {
  getResultsByIdOneYear: PropTypes.func.isRequired,
  motivateResult: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  motivateResult: state.motivateResult,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps, { getResultsByIdOneYear })(MotivateYear);