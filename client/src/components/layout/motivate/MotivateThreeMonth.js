
import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResultsByIdThreeMonths } from '../../../actions/postMotivateResults';
import * as d3 from "d3";
import GaugeChart from 'react-gauge-chart';
import Spinner from '../../layout/Spinner';

const MotivateThreeMonth = ({ user, getResultsByIdThreeMonths, motivateResult: { summaryMotivateResults3m } }) => {


  useEffect(() => {
    getResultsByIdThreeMonths(user._id, 90);
  }, [getResultsByIdThreeMonths, user._id]);
 // console.log("motivate weekly has", summaryMotivateResults3m );
  let motivateBodyResults = "";
  if(summaryMotivateResults3m.summaryStats){
  
    motivateBodyResults = 
    <Fragment>
    {summaryMotivateResults3m === null ? (
      <Spinner />
    ) : (
      <Fragment>
        <section>
          {/* <div className="flex mx-auto p-4">
              <div className="flex flex-col flex-grow"> */}
                  <div className="border border-gray-200 rounded-xl p-10 my-4">
                    <div className="w-96">
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
                    <div className="w-48">
                        <p>below is the data to be graphed</p><br/>
                      {summaryMotivateResults3m.templvl.map((item, index) => (
                        <p key={index}>{item.date} Tempted Level was {item.temptedlevel}!</p>
                    ))}
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
                        <p>Favorite food you planned to eat next</p><br/>
                        <p>(below is the data to be graphed)</p><br/>
                      {summaryMotivateResults3m.planned2eat.map((item, index) => (
                        <p key={index}>{item} - (one entry)</p>
                    ))}
                    </div>
                    <div className="w-full border border-gray-200 rounded-xl p-10 ml-2">
                        <div className="text-beaDarkBlue uppercase text-center font-bold">Visualizations: Evaluating Mood</div>
                        <p>Favorite food you planned to eat next</p><br/>
                        <p>How you usually felt during each eating phase (below is the data to be graphed)</p><br/>
                        Planning: {summaryMotivateResults3m.summaryStats.planPhaseAvg}<br/>
                        Initial Eating: {summaryMotivateResults3m.summaryStats.ieAvg}<br/>
                        Fullness: {summaryMotivateResults3m.summaryStats.fullnessAvg}<br/>
                        After Eating: {summaryMotivateResults3m.summaryStats.aeplanningAvg}<br/>
                        <p>How long you thought each eating phase lasted (below is the data to be graphed)</p><br/>
                        Planning: {summaryMotivateResults3m.summaryStats.lessThanTen}<br/>
                        Initial Eating: {summaryMotivateResults3m.summaryStats.tenToThirty}<br/>
                        Fullness: {summaryMotivateResults3m.summaryStats.thirtyToOne}<br/>
                        Fullness: {summaryMotivateResults3m.summaryStats.oneToTwo}<br/>
                        After Eating: {summaryMotivateResults3m.summaryStats.overTwoHr}<br/>
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



MotivateThreeMonth.propTypes = {
  getResultsByIdThreeMonths: PropTypes.func.isRequired,
  motivateResult: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  motivateResult: state.motivateResult,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps, { getResultsByIdThreeMonths })(MotivateThreeMonth);