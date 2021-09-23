import api from '../utils/api';
import axios from 'axios';
import { setAlert } from './alert';
import {
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_MEDITATE_RESULTS,
  GET_TODAY_MEDITATE_RESULTS,
  MEDITATE_RESULTS_ERROR
} from './types';




export const postMeditateResults = formData => async dispatch => {
    console.log("in post meditate results/actions ", formData);
    // const body = { email, password };
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body = JSON.stringify(formData);
    try {
      // const res = await api.post('/auth', body);
    console.log("made it to meditate plan results in actions", formData );
      const res = await axios.post('/api/meditateResults', body, config);
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
export const getResultsById = userId => async dispatch => {
  console.log("get results by id is called");
  try {
    
    const res = await api.get(`/meditateResults/`);
    console.log('in try for get meditate results');
    dispatch({
      type: GET_MEDITATE_RESULTS,
      payload: res.data
    });
  } catch (err) {
    console.log('error reached');
    dispatch({
      type: MEDITATE_RESULTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


