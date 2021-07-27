import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import planResult from './planResult';
import planResult2 from './planResult';
import todayPlanResult from './planResult';
import previousPlanResult from './planResult';
import motivateResult from './motivateResult';
import todayMotivateResult from './motivateResult';
export default combineReducers({
    alert,
    auth,
    planResult,
    planResult2,
    todayPlanResult,
    previousPlanResult,
    motivateResult,
    todayMotivateResult
});