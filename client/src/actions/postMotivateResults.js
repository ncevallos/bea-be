import api from '../utils/api';
import axios from 'axios';
import { setAlert } from './alert';
import {
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_MOTIVATE_RESULTS,
  GET_TODAY_MOTIVATE_RESULTS,
  GET_SUMMARY_MOTIVATE_RESULTS,
  MOTIVATE_RESULTS_ERROR
} from './types';



// Register User
// export const postPlanResults = formData => async dispatch => {
//     console.log("in post plan results/actions ");
//   try {
//     const res = await api.post('/planResults', formData);
//     console.log("made it to post plan results in actions");
//   } catch (err) {
//     const errors = err.response.data.errors;

//     console.log("made it to post plan results in actions");
//     if (errors) {
//       errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//     }

//     dispatch({
//       type: REGISTER_FAIL
//     });
//   }
// };

export const postMotivateResults = formData => async dispatch => {
    console.log("in post motivate results/actions ", formData);
    // const body = { email, password };
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body = JSON.stringify(formData);
    try {
      // const res = await api.post('/auth', body);
    console.log("made it to motivate plan results in actions", formData );
      const res = await axios.post('/api/motivateResults', body, config);
      console.log('success maybe');
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      
    //   dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
        console.log("in catch", errors);
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        console.log("in erros");
      }
  
      dispatch({
        type: LOGIN_FAIL
      });
    }
  };

  // Get motivate resuts for 30 days
export const getResultsById = (userId, days) => async dispatch => {
  console.log("get results by id is called");
  try {
    
    const res = await api.get(`/motivateResults/${userId}/${days}`);
    console.log('in try for get motivate results', userId);
    console.log("days contains this in try for get motivate results", days)
    dispatch({
      type: GET_MOTIVATE_RESULTS,
      payload: res.data
    });
  } catch (err) {
    console.log('error reached');
    dispatch({
      type: MOTIVATE_RESULTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


  // Get today's plan results
  export const getMotivResultsByIdToday = userId=> async dispatch => {
    console.log("get motivate results by id today is called", userId);
 //   const date = new Date();

    try {
      
      // const res = await api.get(`/motivateResults/${userId}`);
      const res = await api.get(`/motivateResults/today/${userId}/`);
      console.log('in try for get motivate results for today');
      dispatch({
        type: GET_TODAY_MOTIVATE_RESULTS,
        payload: res.data
      });
    } catch (err) {
      console.log('error reached');
      dispatch({
        type: MOTIVATE_RESULTS_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

    // Get results by ID
    export const getMotivateSummary = userId => async dispatch => {
      console.log("get summary by id is called", userId);
      try {
        
        // const res = await api.get(`/motivateResults/${userId}`);
        const res = await api.get(`/motivateResults/summary/${userId}`);
        console.log('in summary try for get results in motivateResults');
        dispatch({
          type: GET_SUMMARY_MOTIVATE_RESULTS,
          payload: res.data
        });
      } catch (err) {
        //console.log('error reached', err.response.statusText);
        dispatch({
          type: MOTIVATE_RESULTS_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status }
        });
      }
    };