import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResultsByIdToday, getResultsById, getSummary } from '../../../actions/postPlanResults';
import PlanMoodHeader from './PlanMoodHeader';
import PlanLineGraph from './PlanLineGraph';
import CalendarPage from './calendar';
import Spinner from '../../layout/Spinner';
import RadialGraph from './RadialGraph';
import 'react-statusbar/dist/statusbar.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import moment from 'moment';


  const Plan3 = ({ user, getResultsById, getResultsByIdToday, planResult2: { planResults2 } }) => {

   console.log("plan results has in plan body has", planResults2);
   let headercontrol = 0;
    headercontrol = planResults2.summaryStats.avgMood;
   // console.log("today plan results has", todayPlanResults);
    let monthText = ""
    let today = new Date();
    if(moment(today).subtract(30, 'days').format('MMMM') == moment(today).format('MMMM')){
        //header will only show current month
        console.log("30 days ago is same month")
        let monthText = moment(today).format('MMMM');
        console.log('month text has', monthText)
    }
    else {
        //header will show the two months
        console.log("30 days ago is not same month")
        let monthText = moment(today).subtract(30, 'days').format('MMM DD') + ' - ' + moment(today).format('MMMM');
        console.log('month text has', monthText)
    }
   let calendarText = moment(today).subtract(30, 'days').format('MMM DD')+ ' - ' + moment(today).format('MMM DD');
    return (
        <Fragment>
          {planResults2 === null ? (
            <Spinner />
          ) : (
            <Fragment>
                <div>
                    <div className="flex flex-col items-center mb-gutter">
                        <label className="text-white text-sm bg-beaBlueText font-light rounded-full px-3 py-1.5">PAST 30 DAYS</label>
                        <div className="w-full">
                            <PlanLineGraph data={planResults2.dates[0]} values={planResults2.values[0]} />
                        </div>
                    </div>
                    {/* <Line
                       //     data={data}
                            data={data}
                            width={100}
                            height={15}
                            options={options}
                        /> */}
                        <PlanMoodHeader avgMood={planResults2.summaryStats.avgMood} />
                    <div className="mb-gutter">
                        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                            <li className="col-span-2 flex flex-col text-center bg-white rounded-xl divide-y divide-gray-200 border border-gray-400">
                                <div className="flex-initial flex flex-col p-8 items-center">
                                    <span className="text-beaBlueText font-bold uppercase text-sm">Mood Eating</span> 
                                        <div className="flex-initial flex flex-row items-center mt-4 px-8">
                                            <div className="w-2/3">
                                                <div style={{
                                                    borderColor: "#000000",
                                                    borderWidth: '1px',
                                                    borderStyle: 'solid',
                                                    borderRadius: '20px',
                                                    padding: '5px 50px',
                                                    margin: '15px'
                                                    }}>{calendarText}</div>
                                                <CalendarPage dates={planResults2.dates[0]} values={planResults2.values[0]} />
                                            </div>
                                            <div className="flex-initial flex flex-col items-center">
                                                <div className="planprogress">
                                                    <div className="flex-initial flex flex-row items-center">
                                                        <div className="p-2 m-0 w-16">
                                                            <div className="font-light text-sm">Great</div>
                                                            <div className="font-medium text-lg">{planResults2.summaryStats.great}%</div>
                                                        </div>
                                                        <div className="pt-0 ml-1">
                                                            <ProgressBar now={planResults2.summaryStats.great}  variant="danger" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-initial flex flex-row mt-0 items-center">
                                                        <div className="p-2 m-0 w-16">
                                                            <div className="font-light text-sm">Good</div>
                                                            <div className="font-medium text-lg">{planResults2.summaryStats.good}%</div>
                                                        </div>
                                                        <div className="pt-0 ml-1">
                                                            <ProgressBar now={planResults2.summaryStats.good}  variant="warning" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-initial flex flex-row mt-0 items-center">
                                                        <div className="p-2 m-0 w-16">
                                                            <div className="font-light text-xs">Not<br/>Good</div>
                                                            <div className="font-medium text-lg">{planResults2.summaryStats.notgood}%</div>
                                                        </div>
                                                        <div className="pt-0 ml-1">
                                                            <ProgressBar now={planResults2.summaryStats.notgood}  variant="success" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-initial flex flex-row mt-0 items-center">
                                                        <div className="p-2 m-0 w-16">
                                                            <div className="font-light text-sm">Horrible</div>
                                                            <div className="font-medium text-lg">{planResults2.summaryStats.horrible}%</div>
                                                        </div>
                                                        <div className="pt-0 ml-1">
                                                            <ProgressBar now={planResults2.summaryStats.horrible}  variant="info" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <span className="mt-6 p-3 bg-beaLightBlue rounded-3xl flex items-center justify-center">
                                                    <img src={bowlIcon} alt="Bowl Icon" className="w-11" />
                                                </span>
                                                <h2 className="mt-0 text-gray-700 text-3xl font-light">{planResults2.summaryStats.stayedontrackpct}%</h2> */}

                                                <div className="w-auto">
                                                    <RadialGraph percent={planResults2.summaryStats.stayedontrackpct}/>
                                                    <span className="mt-6 text-gray-700 text-sm font-thin pb-0">Why you stayed on track</span>
                                                    <h2 className="mt-0 text-gray-700 text-3xl font-light leading-6">{planResults2.summaryStats.stayedontrack}</h2>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </li>
                        </ul>
                    </div>


                    <div className="mb-gutter">
                        <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                            <div className="col-span-1 flex flex-col text-center bg-white rounded-xl border border-gray-400 p-4">
                                <span className="text-beaBlueText text-sm font-bold">FAVORITE GOAL</span>
                                <div className="flex flex-row">
                                    <div className="flex-1 flex flex-col items-center">
                                        {/* <span className="mt-6 p-3 bg-beaLightBlue rounded-3xl flex items-center justify-center">
                                            <img src={bowlIcon} alt="Bowl Icon" className="w-11" />
                                        </span>
                                        <h2 className="mt-0 text-gray-700 text-3xl font-light">{planResults2.summaryStats.favgoalpct}%</h2> */}
                                        <RadialGraph percent={planResults2.summaryStats.favgoalpct}/>
                                        <span className="mt-6 text-gray-700 text-sm font-light">Most important goal</span>
                                        <h2 className="mt-0 text-gray-700 text-xl leading-6 font-medium">{planResults2.summaryStats.favgoal}</h2>
    
                                    </div>
                                    <div className="flex-1 flex flex-col items-center">
                                        {/* <span className="mt-6 p-3 bg-beaLightBlue rounded-3xl flex items-center justify-center">
                                            <img src={bowlIcon} alt="Bowl Icon" className="w-11" />
                                        </span>
                                        <h2 className="mt-0 text-gray-700 text-3xl font-light">{planResults2.summaryStats.favgoal2pct}%</h2> */}
                                        <RadialGraph percent={planResults2.summaryStats.favgoal2pct}/>
                                        <span className="mt-6 text-gray-700 text-sm font-light">Main focus of food choice</span>
                                        <h2 className="mt-0 text-gray-700 text-xl leading-6 font-medium">{planResults2.summaryStats.favgoal2}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col text-center bg-white rounded-xl border border-gray-400 p-4">
                                <div className="flex-1 flex flex-col items-center">
                                    <span className="text-beaBlueText text-sm font-bold">FAVORITE ACTION</span>
                                    <RadialGraph percent={planResults2.summaryStats.favactionpct}/>
                                    <span className="mt-6 text-gray-700 text-sm font-light">The action that stopped unmindful eating</span>
                                    <h2 className="mt-0 text-gray-700 text-xl leading-6 font-medium">{planResults2.summaryStats.favaction}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center w-full mb-gutter">
                        <button type="button" className="btn-darkPurpleInvert">        
                            View Past Entries
                        </button>
                    </div>
                </div>

        </Fragment>
        )}
      </Fragment>
    )
}

//export default Plan3;


  Plan3.propTypes = {
    getResultsByIdToday: PropTypes.func.isRequired,
    getResultsById: PropTypes.func.isRequired,
    getSummary:  PropTypes.func.isRequired,
    planResult2: PropTypes.object.isRequired,
    todayPlanResult: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    planResult2: state.planResult2,
    todayPlanResult: state.todayPlanResult,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  });
  
  export default connect(mapStateToProps, { getResultsById, getResultsByIdToday, getSummary })(Plan3);