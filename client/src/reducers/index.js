import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import planResult from './planResult';
export default combineReducers({
    alert,
    auth,
    planResult
});