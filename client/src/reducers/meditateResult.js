import {
    GET_MEDITATE_RESULTS,
    GET_TODAY_MEDITATE_RESULTS,
    MEDITATE_RESULTS_ERROR
  } from '../actions/types';
  
  const initialState = {
    moeditateResults: [],
    todayMeditateResults: [],
    meditateResult: null,
    todayMeditateResult: null,
    loading: true,
    error: {}
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_TODAY_MEDITATE_RESULTS:
        return {
          ...state,
          todayMeditateResults: payload,
          loading: false
        };
      case GET_MEDITATE_RESULTS:
        return {
          ...state,
          meditateResults: payload,
          loading: false
        };
      case MEDITATE_RESULTS_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      default:
        return state;
    }
  }
  