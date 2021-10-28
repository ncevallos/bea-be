import React, { useEffect, Fragment } from 'react'
import MeditateVidSection from './MeditateVidSection';
import { getMeditateResultsById, getTodayMeditateResultsById } from '../../../actions/meditateResults';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MeditateHeader from './MeditateHeader';


  const Meditate = ({ user, 
        getMeditateResultsById,
        getTodayMeditateResultsById,
         meditateResult: {meditateResults},
         todayMeditateResult: {todayMeditateResults} 
        }) => {
    
      useEffect(() => {
        getMeditateResultsById(user._id);
        getTodayMeditateResultsById(user._id);
     
      }, [getMeditateResultsById, getTodayMeditateResultsById, user._id]);
      console.log("meditate results has", meditateResults);
      console.log("today, meditate results has", todayMeditateResults);

    let meditateBodyResults = "";
    if(meditateResults){
    
      meditateBodyResults = 
          <Fragment>
  
          <MeditateVidSection results={meditateResults}/>
          </Fragment>
    }
    else {
      meditateBodyResults = 
          <Fragment><div>Loading</div></Fragment>
  
    }
    
    return (
        <section>
            <div className="flex-grow w-full mx-auto lg:px-0 flex">
            <div className="flex-1 min-w-0 lg:flex">
            <div className="bg-white lg:min-w-0 lg:flex-1 z-20 ml-0 mt-16">

                <div className="flex md:flex justify-center mt-0">
                <div className="flex flex-col min-w-0 items-center mt-0">

                </div>
                </div>
                {/* Below will be dynamically changed depending on whether activity has been complete */}
                <MeditateHeader results={todayMeditateResults} />

                {/* //Below will be the recent/featured section */}
                {meditateBodyResults}
            </div></div>
            </div>
        </section>
    )
}
Meditate.propTypes = {
   getMeditateResultsById: PropTypes.func.isRequired,
   getTodayMeditateResultsById: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    meditateResult: state.meditateResult,
    todayMeditateResult: state.todayMeditateResult,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  });
  
  export default connect(mapStateToProps, { getMeditateResultsById, getTodayMeditateResultsById})(Meditate);
  