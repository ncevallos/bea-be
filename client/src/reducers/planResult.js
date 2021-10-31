import {
  GET_PLAN_RESULTS,
  GET_TODAY_PLAN_RESULTS,
  GET_PREVIOUSDAY_PLAN_RESULTS,
  GET_SUMMARY_PLAN_RESULTS,
  GET_SUMMARY_PLAN_RESULTS_1WK,
  GET_SUMMARY_PLAN_RESULTS_1M,
  GET_SUMMARY_PLAN_RESULTS_3M,
  PLAN_RESULTS_ERROR
} from '../actions/types';

const initialState = {
  previousPlanResults: [],
  todayPlanResults: [],
  summaryPlanResults1wk: [],
  summaryPlanResults1m: [],
  summaryPlanResults3m: [],
  planResults: [],
  planResults2: [],
  previousPlanResult: null,
  planResult: null,
  planResult2: null,
  todayPlanResult: null,
  summaryPlanResult1wk: null,
  summaryPlanResult1m: null,
  summaryPlanResult3m: null,
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
        case GET_SUMMARY_PLAN_RESULTS_1WK:
          return {
            ...state,
            summaryPlanResult1wk: payload,
            loading: false
          };
        case GET_SUMMARY_PLAN_RESULTS_1M:
          return {
            ...state,
            summaryPlanResult1m: payload,
            loading: false
          };
        case GET_SUMMARY_PLAN_RESULTS_3M:
          return {
            ...state,
            summaryPlanResult3m: payload,
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
