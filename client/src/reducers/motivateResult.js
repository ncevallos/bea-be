import {
    GET_MOTIVATE_RESULTS,
    GET_TODAY_MOTIVATE_RESULTS,
    GET_SUMMARY_MOTIVATE_RESULTS,
    MOTIVATE_RESULTS_ERROR
  } from '../actions/types';
  
  const initialState = {
    motivateResults: [],
    todayPlanResults: [],
    todayMotivateResults: [],
    summaryMotivateResults: [],
    motivateResult: null,
    todayMotivateResult: null,
    summaryMotivateResult: null,
    loading: true,
    error: {}
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_TODAY_MOTIVATE_RESULTS:
        return {
          ...state,
          todayMotivateResults: payload,
          loading: false
        };
      case GET_MOTIVATE_RESULTS:
        return {
          ...state,
          motivateResults: payload,
          loading: false
        };
      case GET_SUMMARY_MOTIVATE_RESULTS:
        return {
          ...state,
          summaryMotivateResults: payload,
          loading: false
        };
      case MOTIVATE_RESULTS_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      default:
        return state;
    }
  }
  