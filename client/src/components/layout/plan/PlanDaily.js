import React, { useEffect, match, Fragment } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import smileyIconRound from '../../../img/smiley-icon-round.svg';
import heartIcon from '../../../img/heart-icon.svg';
import bowlIcon from '../../../img/bowl-icon.svg';
import PlanIconsSmall from './PlanIconsSmall';
import PlanIcons from './PlanIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResultsByIdToday } from '../../../actions/postPlanResults';


  const PlanDaily = ({ user, match, getResultsByIdToday, todayPlanResult: { todayPlanResults } }) => {
    let DayofPlan  = new Date();
    useEffect(() => {
        console.log('match in plan daily has ', match.params.date)
        if(match.params.date){
            getResultsByIdToday(user._id, match.params.date);
            DayofPlan = moment().format(match.params.date);
            console.log("dayofPlan has ", DayofPlan)
          //  console.log('reached there is a date present')
        }
        else{
            const today = new Date();
            getResultsByIdToday(user._id, today);
            DayofPlan = today;
            console.log("dayofPlan has ", DayofPlan)
           // console.log('reached there isnt a date present')

        }
    }, [ match.params.date]);

   console.log("today plan results has", todayPlanResults);
    let nextDayButton = ''
    let today = new Date();
    let planDailyBody =''
    let secondCondition = ''
    let yesterday = '/PlanDaily/' + moment(match.params.date).subtract(1, 'days').format('LL');
        if(moment(match.params.date).format('MM Do YYYY') === moment(today).format('MM Do YYYY')){
        } else {
            nextDayButton = 
            <Link to={'/PlanDaily/' + moment(match.params.date).add(1, 'days').format('LL')}  className="flex flex-row items-center navigateButton px-3">{moment(match.params.date).add(1, 'days').format('MMMM Do')}
            <svg className="w-4 ml-1.5" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.45043 7.78955L14.4104 7.78955" stroke="#7B48CB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8.95047 2.03955L14.7529 7.76625L8.95047 13.5396" stroke="#7B48CB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
            </Link>
        }
        if(todayPlanResults.stayedontrack === "Smaller Amounts" || todayPlanResults.stayedontrack === "Different foods"){
            console.log("was a bad day add the second bar for content")
            secondCondition = 
            <Fragment>
                <div className="flex flex-row items-center mb-1.5">
                <div className="flex flex-none rounded-full bg-beaLightBlue p-2">
                <PlanIconsSmall msg={todayPlanResults.stayedontrack} />  
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                    <p className="text-sm text-gray-500 mb-0">
                        <strong>Eating {todayPlanResults.stayedontrack} ({todayPlanResults.plangoal2}) is something that you would have done differently.</strong> 
                    </p>
                </div>
            </div>
                <div className="flex flex-row items-center mb-1.5">
                <div className="flex flex-none rounded-full bg-beaLightBlue p-2">
                <PlanIconsSmall msg={todayPlanResults.influencedeating} />  
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                    <p className="text-sm text-gray-500 mb-0">
                        <strong>{todayPlanResults.influencedeating} influenced your eating. </strong> 
                    </p>
                </div>
            </div>
            </Fragment>
        }
        else {
            secondCondition = 
            <div className="flex flex-row items-center mb-1.5">
            <div className="flex flex-none rounded-full bg-beaLightBlue p-2">
                <PlanIconsSmall msg={todayPlanResults.stayedontrack} />  
            </div>
            <div className="ml-3 flex-1 md:flex md:justify-between">
                <p className="text-sm text-gray-500 mb-0">
                    <strong>{todayPlanResults.stayedontrack} influenced your eating.</strong> 
                </p>
                </div>
            </div>
        }
        if(todayPlanResults.howdoyoufeel){
        
            planDailyBody = 
            <Fragment>
            <div className="flex flex-col bg-white overflow-hidden border border-gray-400 rounded-xl p-4 mb-gutter items-start">
            <div className="flex justify-center w-full">
                <span className="text-beaBlueText font-bold uppercase text-sm">Mood Eating</span>
            </div>
            <div className="flex flex-row items-start w-full">
                <img src={smileyIconRound} alt="Round Smiley Icon" className="w-24" />
                <div className="flex flex-col items-baseline px-4 py-3 sm:px-6">
                    <p className="mt-1 max-w-2xl text-sm text-gray-500 mb-0">
                        How you felt about what you ate in the past day
                    </p>
                    <h3 className="text-4xl font-light text-gray-900 font-extralight mb-3">
                        {todayPlanResults.howdoyoufeel}
                    </h3>
                    {secondCondition}
                    {/* <div className="flex flex-row items-center mb-1.5">
                        <div className="flex flex-none rounded-full bg-beaLightBlue p-2">
                            <img src={heartIcon} alt="Heart Icon" className="w-5" />
                        </div>
                        <div className="ml-3 flex-1 md:flex md:justify-between">
                            <p className="text-sm text-gray-500 mb-0">
                                <strong>{todayPlanResults.stayedontrack}</strong> helped you stay on track for the following reason:
                            </p>
                        </div>
                    </div> */}
                    <p className="mt-1 text-sm text-gray-700 leading-6">
                        <strong>What happened?</strong><br/>
                        {todayPlanResults.planjournal}
                    </p>
                </div>
            </div>
        </div>
        <div>
            <ul className="grid grid-cols-1 gap-gutter sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mb-gutter">
                <li className="col-span-1 flex flex-col text-center bg-white rounded-xl divide-y divide-gray-200 border border-gray-400">
                    <div className="flex-1 flex flex-col p-8 items-center">
                        <span className="text-beaBlueText text-sm">Goal</span>
                        <span className="mt-6 p-4 bg-beaLightBlue rounded-3xl flex items-center justify-center">
                            <PlanIcons msg={todayPlanResults.plangoal} />  
                        </span>
                        <span className="mt-6 text-gray-700 text-sm font-light">The most important goal for you to have today</span>
                        <h2 className="mt-0 text-gray-700 text-3xl font-light mb-3">{todayPlanResults.plangoal} and {todayPlanResults.plangoal2}</h2>
                        <div className="flex flex-col items-center bg-beaStrongOrange w-full rounded-3xl p-1.5">
                            <div className="bg-opacity-60 bg-gray-100 w-full rounded-3xl p-3 uppercase text-beaStrongOrange font-bold text-lg mb-3">Bea's Tips</div>
                            <span className="text-white text-md mb-1.5"><strong>You may find this article helpful:</strong> Healthy Eating: Recognizing Your Hunger Signals.</span>
                            <svg className="w-6 mb-2.5" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.33454 14.3192L22.6536 14.3192" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13.3777 2.33984L23.2356 14.2705L13.3777 26.2982" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </div>
                    </div>
                </li>
                <li className="col-span-1 flex flex-col text-center bg-white rounded-xl divide-y divide-gray-200 border border-gray-400">
                    <div className="flex-1 flex flex-col p-8 items-center">
                        <span className="text-beaBlueText text-sm">Action</span>
                        <span className="mt-6 p-4 bg-beaLightBlue rounded-3xl flex items-center justify-center">
                            <PlanIcons msg={todayPlanResults.plangoal5} />  
                        </span>
                        <span className="mt-6 text-gray-700 text-sm font-light">When you feel that urge to eat</span>
                        <h2 className="mt-0 text-gray-700 text-3xl font-light">{todayPlanResults.plangoal5}</h2>
                    </div>
                </li>
            </ul>
        </div>
        </Fragment> 
        }
        else {
            planDailyBody = 
            <Fragment>
            <div className="flex flex-col bg-white overflow-hidden border border-gray-400 rounded-xl p-4 mb-gutter items-start">
            <div className="flex justify-center w-full">
                <span className="text-beaBlueText font-bold uppercase text-sm">Mood Eating</span>
            </div>
            <div className="flex flex-row items-start w-full">
                <div className="flex flex-col items-baseline px-4 py-3 sm:px-6">
                    <p className="mt-1 max-w-2xl text-sm text-gray-500 mb-0">
                        Quote text here
                    </p>
                </div>
            </div>
        </div>
        <div>
            <ul className="grid grid-cols-1 gap-gutter sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mb-gutter">
                <li className="col-span-1 flex flex-col text-center bg-white rounded-xl divide-y divide-gray-200 border border-gray-400">
                    <div className="flex-1 flex flex-col p-8 items-center">
                        <span className="text-beaBlueText text-sm">Goal</span>
                        <span className="mt-6 p-4 bg-beaLightBlue rounded-3xl flex items-center justify-center">
                            <PlanIcons msg={todayPlanResults.plangoal} />  
                        </span>
                        <span className="mt-6 text-gray-700 text-sm font-light">skipped activity</span>
                    </div>
                </li>
                <li className="col-span-1 flex flex-col text-center bg-white rounded-xl divide-y divide-gray-200 border border-gray-400">
                    <div className="flex-1 flex flex-col p-8 items-center">
                        <span className="text-beaBlueText text-sm">Action</span>
                        <span className="mt-6 p-4 bg-beaLightBlue rounded-3xl flex items-center justify-center">
                            <PlanIcons msg={todayPlanResults.plangoal5} />  
                        </span>
                        <span className="mt-6 text-gray-700 text-sm font-light">skipped activity</span>
                    </div>
                </li>
            </ul>
        </div>
        </Fragment> 
        }
    return (
        <section>
            <div className="flex mx-auto p-4">


                <div className="flex flex-col flex-grow">

                    <div className="dateHeader text-center items-center mb-gutter">
                        <label className="flex content-center mb-0">   
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {/* <span className="align-middle pt-0.5">Today {moment(todayPlanResults.date).format('MMMM Do YYYY')}</span> */}
                            <span className="align-middle pt-0.5">Today {moment(match.params.date).format('MMMM Do YYYY')}</span>
                        </label>
                    </div>
                    {planDailyBody}                    
                    {/* Bottom Navigation Area  below*/}
                    <div className="flex flex-row justify-between">
                        <Link to={yesterday} className="flex flex-row items-center navigateButton px-3">
                            <svg className="w-4 mr-1.5 ml-0" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.74 8.21045L2.78 8.21045" stroke="#7B48CB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.23996 13.9604L2.4375 8.23375L8.23996 2.46045" stroke="#7B48CB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {moment(match.params.date).subtract(1, 'days').format('MMMM Do')}
                            {/* {moment(todayPlanResults.date).subtract(1, 'days').format('MMMM Do')} */}
                        </Link>
                        <Link to='/PlanMonthly' className="flex flex-row items-center navigateButton px-3">

                            View {moment(match.params.date).format('MMMM')}
                            {/* View {moment(todayPlanResults.date).format('MMMM')} */}
                        </Link>

                    {nextDayButton}
                    </div>



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
    )
}

PlanDaily.propTypes = {
    getResultsByIdToday: PropTypes.func.isRequired,
    planResult: PropTypes.object.isRequired,
    todayPlanResult: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    planResult: state.planResult2,
    todayPlanResult: state.todayPlanResult,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  });
  
  export default connect(mapStateToProps, { getResultsByIdToday })(PlanDaily);