import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import planResult from './planResult';
import todayPlanResult from './planResult';
import motivateResult from './motivateResult';
export default combineReducers({
    alert,
    auth,
    planResult,
    todayPlanResult,
    motivateResult
});