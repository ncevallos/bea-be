import {
    GET_MOTIVATE_RESULTS,
    GET_TODAY_MOTIVATE_RESULTS,
    GET_SUMMARY_MOTIVATE_RESULTS,
    GET_SUMMARY_MOTIVATE_RESULTS_1WK,
    GET_SUMMARY_MOTIVATE_RESULTS_1M,
    GET_SUMMARY_MOTIVATE_RESULTS_3M,
    GET_SUMMARY_MOTIVATE_RESULTS_1Y,
    MOTIVATE_RESULTS_ERROR
  } from '../actions/types';
  
  const initialState = {
    motivateResults: [],
    todayPlanResults: [],
    todayMotivateResults: [],
    summaryMotivateResults1wk: [],
    summaryMotivateResults1m: [],
    summaryMotivateResults3m: [],
    summaryMotivateResults1y: [],
    summaryMotivateResults: [],
    motivateResult: null,
    todayMotivateResult: null,
    summaryMotivateResult1wk: null,
    summaryMotivateResult1m: null,
    summaryMotivateResult3m: null,
    summaryMotivateResult1y: null,
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
      case GET_SUMMARY_MOTIVATE_RESULTS_1WK:
        return {
          ...state,
          summaryMotivateResults1wk: payload,
          loading: false
        };
      case GET_SUMMARY_MOTIVATE_RESULTS_1M:
        return {
          ...state,
          summaryMotivateResults1m: payload,
          loading: false
        };
      case GET_SUMMARY_MOTIVATE_RESULTS_3M:
        return {
          ...state,
          summaryMotivateResults3m: payload,
          loading: false
        };
      case GET_SUMMARY_MOTIVATE_RESULTS_1Y:
        return {
          ...state,
          summaryMotivateResults1y: payload,
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
  