import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResultsByIdToday } from '../../../actions/postPlanResults';
import planIconWhite from '../../../img/plan-icon-white.svg';
import { Link } from 'react-router-dom';
import RadialGraph from './RadialGraph';


    const MeditateHeader = ({ user, getResultsByIdToday, todayPlanResult: { todayPlanResults } }) => {
        useEffect(() => {
            getResultsByIdToday(user._id);
        }, [getResultsByIdToday, user._id]);
     //   console.log("plan  header new has", todayPlanResults );
    
        let planHeader = "";
      if(todayPlanResults.howdoyoufeel){
  
        planHeader = 
            <div className="flex flex-grow w-full items-center rounded-xl bg-contain bg-no-repeat bg-right-bottom flex flex-col p-6 bg-beaPurple">
            <h4 className="text-base leading-6 font-bold text-white uppercase mb-4">
                Meditate
            </h4>
            <RadialGraph img={planIconWhite} percent='100'/>
            <label className="text-xl font-thin text-white mb-4">Complete Today</label>
            <Link to='/Meditate' className="btn-white mt-1" type='button'>
                     View Results</Link>
            </div>


      }
      else {
        planHeader = 
            <div className="flex flex-grow w-full items-center rounded-xl bg-contain bg-no-repeat bg-right-bottom flex flex-col p-6 bg-beaPurple">
            <h4 className="text-base leading-6 font-bold text-white uppercase mb-4">
            Motivate
            </h4>
            <RadialGraph img={planIconWhite} percent='100'/>
            <label className="text-xl font-thin text-white mb-4">Complete Today</label>
            <Link to='/Meditate' className="btn-white mt-1" type='button'>
            Meditate Now</Link>
            </div>
       
      }
    return (
        <Fragment>
        {planHeader}
        </Fragment>


    )
  }

  MeditateHeader.propTypes = {
    getResultsByIdToday: PropTypes.func.isRequired,
    todayPlanResult: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    todayPlanResult: state.todayPlanResult,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  });
  
  export default connect(mapStateToProps, { getResultsByIdToday })(MeditateHeader);
