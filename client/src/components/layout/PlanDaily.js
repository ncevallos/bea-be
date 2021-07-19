import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import smileyIconRound from '../../img/smiley-icon-round.svg';
import heartIcon from '../../img/heart-icon.svg';
import bowlIcon from '../../img/bowl-icon.svg';
import newspaperIcon from '../../img/newspaper-icon.svg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResultsByIdToday } from '../../actions/postPlanResults';


  const PlanDaily = ({ user, getResultsByIdToday, todayPlanResult: { todayPlanResults } }) => {

    useEffect(() => {
        getResultsByIdToday(user._id);
    }, [getResultsByIdToday, user._id]);
  // console.log("plan results has", planResults2);

   console.log("today plan results has", todayPlanResults);

// export const Plan3 = () => {
    return (
        <section>
            <div className="flex mx-auto p-4">


            {/* {todayPlanResults.map((todayPlanResult) => ( */}
                <div className="flex flex-col flex-grow">

                    <button type="button" className="btn-darkPurple text-center items-center">       
                    Today {moment(todayPlanResults.date).format('MMMM Do YYYY')}
                                    </button>

                    <div className="flex bg-white overflow-hidden border border-gray-400 rounded-xl p-4 mb-3 items-start">
                        {/* Below needs to implemented to go full width according to designs
                        <div className="flex-1 flex flex-col p-8 text-center">Mood Eating</div> */}
                        <img src={smileyIconRound} alt="Round Smiley Icon" className="w-36" />
                        <div className="px-4 py-3 sm:px-6">
                            <p className="mt-1 max-w-2xl text-sm text-gray-500 mb-0">
                                How you felt about what you ate in the past day
                            </p>
                            <h3 className="text-4xl font-medium text-gray-900 font-extralight mb-3">
                                {todayPlanResults.howdoyoufeel}
                            </h3>
                            <div className="rounded-md bg-beaLightBlue  p-4">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <img src={heartIcon} alt="Heart Icon" className="w-5" />
                                    </div>
                                    <div className="ml-3 flex-1 md:flex md:justify-between">
                                        <p className="text-sm text-blue-700 mb-0">
                                            <strong>{todayPlanResults.stayedontrack}</strong> helped you stay on track for the following reason:
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-1 text-sm text-gray-700 max-w-prose leading-6">
                            {todayPlanResults.planjournal}
                            
                            </p>
                        </div>
                    </div>




                    <div>
                        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                            <li className="col-span-1 flex flex-col text-center bg-white rounded-xl divide-y divide-gray-200 border border-gray-400">
                                <div className="flex-1 flex flex-col p-8 items-center">
                                    <span className="text-beaBlueText text-sm">Goal</span>
                                    <span className="mt-6 p-3 bg-beaLightBlue rounded-3xl flex items-center justify-center">
                                        <img src={bowlIcon} alt="Bowl Icon" className="w-11" />
                                    </span>
                                    <span className="mt-6 text-gray-700 text-sm font-thin">The most important goal for you to have today</span>
                                    <h2 className="mt-0 text-gray-700 text-3xl font-light">{todayPlanResults.plangoal} and<br/>
                                                        {todayPlanResults.plangoal2}</h2>
                                    <span className="mt-6 p-2 border-2 border-beaLightBlue rounded-2xl flex items-center justify-center">
                                        <img src={newspaperIcon} alt="Newspaper Icon" className="w-7" />
                                    </span>
                                    <span className="mt-1 text-gray-700 text-sm font-bold uppercase tracking-wider">BEA’S RECOMMENDED READ</span>
                                    <span className="mt-1 mb-3 text-gray-700 text-sm font-light">Healthy Eating: Recognizing Your Hunger Signals</span>
                                    <button type="button" className="btn-darkPurple">       
                                        Read Article
                                    </button>
                                </div>
                            </li>
                            <li className="col-span-1 flex flex-col text-center bg-white rounded-xl divide-y divide-gray-200 border border-gray-400">
                                <div className="flex-1 flex flex-col p-8 items-center">
                                    <span className="text-beaBlueText text-sm">Action</span>
                                    <span className="mt-6 p-3 bg-beaLightBlue rounded-3xl flex items-center justify-center">
                                        <img src={bowlIcon}  alt="Bowl Icon" className="w-11" />
                                    </span>
                                    <span className="mt-6 text-gray-700 text-sm font-thin">When you feel that urge to eat</span>
                                    <h2 className="mt-0 text-gray-700 text-3xl font-light">{todayPlanResults.plangoal5}</h2>
                                    <span className="mt-6 p-2 border-2 border-beaLightBlue rounded-2xl flex items-center justify-center">
                                        <img src={newspaperIcon} alt="Newspaper Icon" className="w-7" />
                                    </span>
                                    <span className="mt-1 text-gray-700 text-sm font-bold uppercase tracking-wider">BEA’S RECOMMENDED READ</span>
                                    <span className="mt-1 mb-3 text-gray-700 text-sm font-light">Healthy Eating: Recognizing Your Hunger Signals</span>
                                    <button type="button" className="btn-darkPurple">       
                                        Read Article
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>


                    <Link to='/PlanMonthly' className="btn-darkPurple">{moment(todayPlanResults.date).subtract(1, 'days').format('MMMM Do YYYY')}</Link>
                    <Link to='/PlanMonthly' className="btn-darkPurple">View July (Revisit to link)</Link>
                    <Link to='/PlanMonthly' className="btn-darkPurple">{moment(todayPlanResults.date).add(1, 'days').format('MMMM Do YYYY')}</Link>








                </div>

{/* ))} */}
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
    )
}

//export default Plan3;


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