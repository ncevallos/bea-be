import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMotivResultsByIdToday } from '../../../actions/postMotivateResults';
import planIconWhite from '../../../img/plan-icon-white.svg';
import { Link } from 'react-router-dom';
import RadialGraph from './RadialGraph';


    const MotivateHeader = ({ user, getMotivResultsByIdToday, todayMotivateResult: { todayMotivateResults } }) => {
        useEffect(() => {
          getMotivResultsByIdToday(user._id);
        }, [getMotivResultsByIdToday, user._id]);
     //   console.log("plan  header new has", todayPlanResults );
    
        let motivateHeader = "";
      if(todayMotivateResults){
  
        motivateHeader = 
        

            <div className="flex flex-grow w-full items-center rounded-xl mr-3 bg-contain bg-no-repeat bg-right-bottom flex flex-col p-6 bg-beaStrongOrange">
                <h4 className="text-base leading-6 font-bold text-white uppercase mb-4">
                     Motivate
                </h4>
                <RadialGraph img={planIconWhite} percent='100'/>
                <label className="text-xl font-thin text-white mb-4">Complete Today</label>
                <Link to='/MotivateMain' className="btn-white mt-1" type='button'>
                     View Results</Link>
                </div>

      }
      else {
        motivateHeader = 
            <div className="flex flex-grow w-full items-center rounded-xl mr-3 bg-contain bg-no-repeat bg-right-bottom flex flex-col p-6 bg-beaStrongOrange">
                <h4 className="text-base leading-6 font-bold text-white uppercase mb-4">
                     Motivate
                </h4>
                <RadialGraph img={planIconWhite} percent='0'/>
                <label className="text-xl font-thin text-white mb-4">Complete Today</label>
                <Link to='/Motivate' className="btn-white mt-1" type='button'>
                     Motivate Now</Link>
                </div>
       
      }
    return (
        <Fragment>
        {motivateHeader}
        </Fragment>


    )
  }

  MotivateHeader.propTypes = {
    getMotivResultsByIdToday: PropTypes.func.isRequired,
    todayMotivateResult: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    todayMotivateResult: state.todayPlanResult,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  });
  
  export default connect(mapStateToProps, { getMotivResultsByIdToday })(MotivateHeader);
