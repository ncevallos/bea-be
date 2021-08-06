
import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResultsByIdOneWeek } from '../../../actions/postMotivateResults';
import { Component } from 'react';
import * as d3 from "d3";
import GaugeChart from 'react-gauge-chart';
import appleIcon from '../../../img/apple-icon.svg';
import calendarIcon from '../../../img/calendar-icon.svg';
import hungryIcon from '../../../img/hungry-icon.svg';
import MotivateSections from './MotivateSections';
import Spinner from '../../layout/Spinner';

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
                      {summaryMotivateResults1wk.templvl.map((item, index) => (
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
                      {summaryMotivateResults1wk.planned2eat.map((item, index) => (
                        <p key={index}>{item} - (one entry)</p>
                    ))}
                    </div>
                    <div className="w-full border border-gray-200 rounded-xl p-10 ml-2">
                        <div className="text-beaDarkBlue uppercase text-center font-bold">Visualizations: Evaluating Mood</div>
                        <p>Favorite food you planned to eat next</p><br/>
                        <p>How you usually felt during each eating phase (below is the data to be graphed)</p><br/>
                        Planning: {summaryMotivateResults1wk.summaryStats.planPhaseAvg}<br/>
                        Initial Eating: {summaryMotivateResults1wk.summaryStats.ieAvg}<br/>
                        Fullness: {summaryMotivateResults1wk.summaryStats.fullnessAvg}<br/>
                        After Eating: {summaryMotivateResults1wk.summaryStats.aeplanningAvg}<br/>
                        <p>How long you thought each eating phase lasted (below is the data to be graphed)</p><br/>
                        Planning: {summaryMotivateResults1wk.summaryStats.lessThanTen}<br/>
                        Initial Eating: {summaryMotivateResults1wk.summaryStats.tenToThirty}<br/>
                        Fullness: {summaryMotivateResults1wk.summaryStats.thirtyToOne}<br/>
                        Fullness: {summaryMotivateResults1wk.summaryStats.oneToTwo}<br/>
                        After Eating: {summaryMotivateResults1wk.summaryStats.overTwoHr}<br/>
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