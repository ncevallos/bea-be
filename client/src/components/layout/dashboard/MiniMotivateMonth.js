
import React, { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResultsByIdOneMonth } from '../../../actions/postMotivateResults';
import Spinner from '../../layout/Spinner';
import ColumnChart from '../motivate/ColumnChart';
import TemptedGauge from './TemptedGauge';

const MiniMotivateMonth = ({ user, getResultsByIdOneMonth, motivateResult: { summaryMotivateResults1m } }) => {


  useEffect(() => {
    getResultsByIdOneMonth(user._id, 30);
  }, [getResultsByIdOneMonth, user._id]);
//    console.log("motivate weekly has", summaryMotivateResults1m );
  let motivateBodyResults = "";
  if(summaryMotivateResults1m.summaryStats){
  
    let speedometerInt = summaryMotivateResults1m.summaryStats.avgTemptationLvl;
    motivateBodyResults = 
    <Fragment>
    {summaryMotivateResults1m === null ? (
      <Spinner />
    ) : (

      <Fragment>
        <section>

        <div className="flex bg-white overflow-hidden border border-gray-400 rounded-xl mb-3 p-10 items-start">
                    <div className="flex flex-col w-full justify-center">
                        <div className="flex justify-center">
                            <h4 className="text-base font-medium text-beaBlueText font-bold mb-3 uppercase">
                                Eating Temptation Level
                            </h4>
                        </div>
                        <div className="flex flex-row overflow-hidden items-start">
                            <div className="flex flex-col items-center w-72">
                                <div>
                            {/* <div className="w-48 mb-3"> */}
                            <TemptedGauge avgTemptationLvl={summaryMotivateResults1m.summaryStats.avgTemptationLvl} id={"gauge-chart05"}/>
                                </div>
                                {/* <h3 className="text-4xl text-gray-900 font-extralight mb-0">
                                    Very Tempted
                                </h3>
                                <p className="mt-1 text-sm text-gray-500 mb-0 text-center">
                                    to eat in a way not ideal
                                </p> */}
                            </div>
                            <div className="flex flex-col flex-grow mb-3 px-4 py-3 sm:px-6 items-center">

                                <div className="w-full h-48 mb-20">
                                <ColumnChart level={summaryMotivateResults1m.summaryStats.temptedlevel} dates={summaryMotivateResults1m.summaryStats.temptedDates}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">

                            <Link to='/motivate' className="btn-darkPurpleInvert">
                            More Motivate Results
                            </Link>
                        </div>   
                    </div>
                </div>
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


MiniMotivateMonth.propTypes = {
  getResultsByIdOneMonth: PropTypes.func.isRequired,
  motivateResult: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  motivateResult: state.motivateResult,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps, { getResultsByIdOneMonth })(MiniMotivateMonth);