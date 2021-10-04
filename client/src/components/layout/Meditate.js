import React, { useEffect, useState, Fragment } from 'react'
import mountainStream from '../../img/mountain-stream.svg';
import MeditateVidSection from './MeditateVidSection';
import { getResultsById } from '../../actions/meditateResults';
import { connect } from 'react-redux';
import PlanHeader from './plan/PlanHeader';
import PlanBody from './plan/PlanBody';
import PropTypes from 'prop-types';


// export const Meditate = () => {


    const Meditate = ({ user, 
        getResultsById,
         meditateResult: {meditateResults} 
        }) => {
        //planResult: { planResults }, 
        // todayPlanResult: {todayPlanResults}
    
      useEffect(() => {
           getResultsById(user._id);
     
      }, [getResultsById, user._id]);
      console.log("meditate results has", meditateResults);

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

                <div className="flex items-center px-4 border-b border-gray-200 sm:px-6 md:h-80 py-8 bg-gradient-to-t from-beaBlue to-white">
                <div className="md:pl-10 h-full w-full flex md:flex-row flex-col-reverse items-center">
                    <div className="flex flex-col lg:ml-4 ml-0 mt-2 md:w-5/12 w-full items-center md:items-start ">
                    <div className="flex flex-col mb-6 items-center mt-5 md:mt-0 md:items-start">
                        <h3 className="text-sm leading-6 font-medium text-beaTextLightGrey uppercase font-black tracking-widest mb-1">
                        Your Meditation Today
                        </h3>
                        <h2 className="text-3xl leading-6 text-beaTextGrey font-light mb-1">
                        Mountain Stream
                        </h2>
                        <h4 className="text-beaTextGrey font-light">
                        3 minutes
                        </h4>
                    </div>
                    <button type="button" className="relative group text-white transition-all hover:bg-transparent hover:text-beaDarkPurple hover:border-beaDarkPurple inline-flex items-center px-6 py-2 border border-transparent shadow-none text-sm font-medium rounded-full bg-beaDarkPurple focus:outline-none">
                        <svg className="w-3.5 mr-2" fill="currentColor" viewBox="0 0 24 24" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 210 210">
                        <path d="M179.07,105L30.93,210V0L179.07,105z"/>
                        </svg>           
                        Play
                    </button>
                    </div>
                    <div className="lg:ml-4 ml-0 flex flex-column h-full items-end">
                    <img src={mountainStream} alt="Mountain Stream" className="w-96" />
                    </div>
                </div>
                </div>
                {/* //Below will be the recent/featured section */}
                {/* <MeditateVidSection results={meditateResults}/> */}
                {meditateBodyResults}
            </div></div>
            </div>
        </section>
    )
}
Meditate.propTypes = {
   // getResultsByIdToday: PropTypes.func.isRequired,
    getResultsById: PropTypes.func.isRequired,
    // getSummary:  PropTypes.func.isRequired,
    // planResult: PropTypes.object.isRequired,
    // planResult2: PropTypes.object.isRequired,
    // todayPlanResult: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    meditateResult: state.meditateResult,
    // planResult2: state.planResult2,
    // todayPlanResult: state.todayPlanResult,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  });
  
  export default connect(mapStateToProps, { getResultsById})(Meditate);
  
//export default Meditate;