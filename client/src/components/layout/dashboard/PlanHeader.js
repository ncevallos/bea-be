import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResultsByIdToday } from '../../../actions/postPlanResults';
import planIconWhite from '../../../img/plan-icon-white.svg';
import { Link } from 'react-router-dom';
import RadialGraph from './RadialGraph';


    const PlanHeader = ({ user, getResultsByIdToday, todayPlanResult: { todayPlanResults } }) => {
        useEffect(() => {
          const today = new Date();
          getResultsByIdToday(user._id, today);
        }, [getResultsByIdToday, user._id]);
     //   console.log("plan  header new has", todayPlanResults );
    
        let planHeader = "";
      if(todayPlanResults.howdoyoufeel){
  
        planHeader = 
        
        <div className="flex flex-grow w-full items-center rounded-xl mr-3 bg-contain bg-no-repeat bg-right-bottom flex flex-col p-6 bg-beaDarkBlue">
        <h4 className="text-base leading-6 font-bold text-white uppercase mb-4">
            Plan
        </h4>
        <RadialGraph img={planIconWhite} percent='100'/>
        <label className="text-xl font-thin text-white mb-4">Complete Today</label>

        <Link to='/PlanDaily' className="btn-white mt-1" type='button'>
        View Results</Link>
        </div>
      }
      else {
        planHeader = 

          <div className="flex flex-grow w-full items-center rounded-xl mr-3 bg-contain bg-no-repeat bg-right-bottom flex flex-col p-6 bg-beaDarkBlue">
              <h4 className="text-base leading-6 font-bold text-white uppercase mb-4">
                  Plan
              </h4>
                <RadialGraph img={planIconWhite} percent='0'/>
              <label className="text-xl font-thin text-white mb-4">Complete Today</label>
              <button type="button" className="btn-white mt-1">
                  Plan Now
              </button>
          </div>
      }
    return (
        <Fragment>
        {planHeader}
        </Fragment>


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
