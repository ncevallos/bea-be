import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResultsByIdToday } from '../../../actions/postPlanResults';
import planIllustration from '../../../img/plan-illustration.svg';
import arrowRight from '../../../img/arrow-right.svg';
import PlanIconsDash from './PlanIconsDash';
import { Link } from 'react-router-dom';


    const PlanHeader = ({ user, getResultsByIdToday, todayPlanResult: { todayPlanResults } }) => {
        useEffect(() => {
            const today = new Date();
            getResultsByIdToday(user._id, today);
           // getResultsByIdToday(user._id);
        }, [getResultsByIdToday, user._id]);
     //   console.log("plan  header new has", todayPlanResults );
    
        let planHeader = "";
      if(todayPlanResults.howdoyoufeel){
  
        planHeader = 

        <div className="flex flex-row w-full justify-between">
        <div className="flex">
            <div className="flex flex-col w-48">
                <div className="w-20 h-20 bg-opacity-50 rounded-3xl mb-2.5">
                    <PlanIconsDash msg={todayPlanResults.plangoal} />  
                </div>
                <div className="">
                    <h4 className="text-sm leading-6 font-medium text-white font-thin tracking-tight mb-1">
                        Your main goal is to eat
                    </h4>
                    <h5 className="text-2xl leading-6 font-medium text-white font-thin tracking-tight mb-1">
                    {todayPlanResults.plangoal} and {todayPlanResults.plangoal2}
                    </h5>
                </div>
            </div>
        </div>
        <div className="flex w-48">
            <div className="flex flex-col">
                <div className="w-20 h-20 bg-opacity-50 rounded-3xl mb-2.5">
                    <PlanIconsDash msg={todayPlanResults.plangoal5} />  
                </div>
                <div className="">
                    <h4 className="text-sm leading-6 font-medium text-white font-thin tracking-tight mb-1">
                        When you feel the urge to eat
                    </h4>
                    <h5 className="text-2xl leading-6 font-medium text-white font-thin tracking-tight mb-1">
                         {todayPlanResults.plangoal5}
                    </h5> 
                </div>
            </div>                            
        </div>
        <div className="flex flex-col justify-center mr-10">
            <Link to='/PlanDaily'>
                <img src={arrowRight} alt="arrow right" className="w-24" />
            </Link>
        </div>
    </div>
      }
      else {
        planHeader = 

            
          <div className="flex flex-row justify-center w-full">
          <div className="flex">
              <div className="flex flex-col items-center">
                    <h4 className="text-3xl leading-6 font-light text-white font-thin tracking-tight mb-gutter">
                        It looks like you didn't create a plan for today.
                    </h4>
                    <Link to='/Plan2' className="btn-white-black mt-1" type='button'>
                        Chat with Bea
                    </Link>               
              </div>
          </div>
      </div>
      }
    return (
        <div style={{ backgroundImage: "linear-gradient(45deg, rgba(109,80,139, 1), rgba(173, 121, 226, 1), rgba(177, 208, 244, 1))" }} className="flex rounded-md mb-gutter bg-contain bg-no-repeat bg-right-bottom flex flex-col p-6 pb-12">
        <div className="mb-4">
            <h3 className="text-sm leading-6 font-medium text-white uppercase font-black tracking-widest mb-1">
                Your Plan Today
            </h3>                        
        </div>
        {planHeader}

        </div>


    )
  }

PlanHeader.propTypes = {
    getResultsByIdToday: PropTypes.func.isRequired,
    todayPlanResult: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    todayPlanResult: state.todayPlanResult,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  });
  
  export default connect(mapStateToProps, { getResultsByIdToday })(PlanHeader);
