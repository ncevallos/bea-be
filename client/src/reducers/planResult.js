import {
  GET_PLAN_RESULTS,
  GET_TODAY_PLAN_RESULTS,
  GET_PREVIOUSDAY_PLAN_RESULTS,
  GET_SUMMARY_PLAN_RESULTS,
  PLAN_RESULTS_ERROR
} from '../actions/types';

const initialState = {
  previousPlanResults: [],
  todayPlanResults: [],
  planResults: [],
  planResults2: [],
  previousPlanResult: null,
  planResult: null,
  planResult2: null,
  todayPlanResult: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TODAY_PLAN_RESULTS:
      return {
        ...state,
        todayPlanResults: payload,
        loading: false
      };
      case GET_PREVIOUSDAY_PLAN_RESULTS:
        return {
          ...state,
          previousPlanResults: payload,
          loading: false
        };
    case GET_PLAN_RESULTS:
      return {
        ...state,
        planResults: payload,
        loading: false
      };

      case GET_SUMMARY_PLAN_RESULTS:
        return {
          ...state,
          planResults2: payload,
          loading: false
        };
  
    case PLAN_RESULTS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
  
    default:
      return state;
  }
}
