import api from '../utils/api';
import axios from 'axios';
import { setAlert } from './alert';
import {
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_PLAN_RESULTS,
  GET_TODAY_PLAN_RESULTS,
  PLAN_RESULTS_ERROR
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

export const postPlanResults = formData => async dispatch => {
    console.log("in post plan results/actions ", formData);
    // const body = { email, password };
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body = JSON.stringify(formData);
    try {
      // const res = await api.post('/auth', body);
    console.log("made it to post plan results in actions", formData );
      const res = await axios.post('/api/planResults', body, config);
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

  // Get results by ID
export const getResultsById = userId => async dispatch => {
  console.log("get results by id is called");
  try {
    
    // const res = await api.get(`/planResults/${userId}`);
    const res = await api.get(`/planResults/`);
    console.log('in try for get results');
    dispatch({
      type: GET_PLAN_RESULTS,
      payload: res.data
    });
  } catch (err) {
    console.log('error reached');
    dispatch({
      type: PLAN_RESULTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

  // Get profile by ID
  export const getResultsByIdToday = userId => async dispatch => {
    console.log("get results by id today is called");
    try {
      
      // const res = await api.get(`/planResults/${userId}`);
      const res = await api.get(`/planResults/today`);
      console.log('in try for get results for today');
      dispatch({
        type: GET_TODAY_PLAN_RESULTS,
        payload: res.data
      });
    } catch (err) {
      console.log('error reached');
      dispatch({
        type: PLAN_RESULTS_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };