import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import planResult from './planResult';
import planResult2 from './planResult';
import todayPlanResult from './planResult';
import previousPlanResult from './planResult';
import motivateResult from './motivateResult';
import todayMotivateResult from './motivateResult';
import summaryMotivateResult1wk from './motivateResult';
import summaryMotivateResult1m from './motivateResult';
import summaryMotivateResult3m from './motivateResult';
import summaryMotivateResult1y from './motivateResult';
export default combineReducers({
    alert,
    auth,
    planResult,
    planResult2,
    todayPlanResult,
    previousPlanResult,
    motivateResult,
    summaryMotivateResult1wk,
    summaryMotivateResult1m,
    summaryMotivateResult3m,
    summaryMotivateResult1y,
    todayMotivateResult
});

