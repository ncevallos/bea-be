import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import smileyIconRound from '../../img/smiley-icon-round.svg';
import heartIcon from '../../img/heart-icon.svg';
import bowlIcon from '../../img/bowl-icon.svg';
import newspaperIcon from '../../img/newspaper-icon.svg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResultsByIdToday, getResultsById } from '../../actions/postPlanResults';
import PlanHeader from './PlanHeader';
import PlanMoodHeader from './PlanMoodHeader';
import PlanMoodHeaderFree from './PlanMoodHeaderFree';


  const PlanDashTop = ({ user, getResultsByIdToday, todayPlanResult: { todayPlanResults } }) => {

    useEffect(() => {
        getResultsByIdToday(user._id);
    }, [getResultsByIdToday, user._id]);
  // console.log("plan results has", planResults2);

   console.log("today plan results has", todayPlanResults);
  
// export const Plan3 = () => {
    return (
        <Fragment>
            <PlanHeader results={todayPlanResults} />
            <PlanMoodHeader mood={todayPlanResults.howdoyoufeel} />
            {/* { (<div>{ todayPlanResults ? <PlanHeader results={todayPlanResults} /> : <PlanHeader results={todayPlanResults} /> }</div>)}
            { (<div>{ todayPlanResults ? <PlanMoodHeader mood={todayPlanResults.howdoyoufeel} /> : <PlanMoodHeaderFree /> }</div>)} */}
        </Fragment>
    )
}
  
//export default Plan3;


PlanDashTop.propTypes = {
    getResultsByIdToday: PropTypes.func.isRequired,
    todayPlanResult: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    todayPlanResult: state.todayPlanResult,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  });
  
  export default connect(mapStateToProps, { getResultsByIdToday })(PlanDashTop);