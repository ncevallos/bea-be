import React, { useState } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { postPlanResults } from '../../../actions/postPlanResults';
import axios from 'axios';

import "./Options.css";

//this code is for once it is understood how to merge global and local props
export const PlanSubmit = ({props, postPlanResults, state, auth, ownProps}) => {
     console.log("USer contains", auth.user);
     console.log("user is found", auth.user._id);
     console.log("own props contains", ownProps)
     let history = useHistory();


  // console.log("own props in plan submit contains ", ownProps);
  // console.log("auth in plan submit contains ", auth);

  const [formData] = useState({
    //user: "60217a517f2b961147d214f0",
    user: auth.user._id,
    lastblockvisited: ownProps.lastblockvisited,
    howdoyoufeel: ownProps.howdoyoufeel,
    howdoyoufeelint: ownProps.howdoyoufeelint,
    planjournal: ownProps.planjournal,
    stayedontrack: ownProps.stayedontrack,
    planbadblock: ownProps.planbadblock,
    what2change: ownProps.what2change,
    influencedeating: ownProps.influencedeating,
    whathappened: ownProps.whathappened,
    somethingelsebad: ownProps.somethingelsebad,
    plangoal: ownProps.plangoal,
    plangoal2: ownProps.plangoal2,
    plangoal3: ownProps.plangoal3,
    plangoal4: ownProps.plangoal4,
    plangoal5: ownProps.plangoal5
});
const OnSubmit = async (goto) => {
    console.log('in on submit command', );
    console.log("goto in onsubmit contains", goto)

    // e.preventDefault();
    // postPlanResults(
    //   formData
    // );
          try {
              console.log("In try block");
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        const body = JSON.stringify(formData)
        const res = await axios.post('/api/planResults', body, config)

        if(goto === "dashboard"){
          history.push('/PlanMain')

        }
        else if(goto === "endSesh"){
          console.log("in end sesh plan submit")
          ownProps.actionProvider.endBlocks();

        }
        else if(goto === "activity"){

          console.log("in activity plan submit")
          // history.push('/PlanMain')
          ownProps.actionProvider.otheractivity();
        }
        else {
          history.push('/PlanMain')

        }
      } catch(err){
        console.log("In catch block");
      }
};
  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          id="dashboard"
          onClick={() => OnSubmit("dashboard")}
        >
          Visit Dashboard
        </button>
        <button
          className="learning-option-button"
          id="activity"
          onClick={() => OnSubmit("activity")}
        >
          Do another Activity
        </button>
        <button
          id="endSesh"
          className="learning-option-button"
          onClick={() => OnSubmit("endSesh")}
        >
          End Session
        </button>
      </div>
    </div>
  );
};



  function mapStateToProps(state, ownProps) {
    const { auth } = state
 
 
   console.log("own props contains ", ownProps );
    console.log("state props contains ", state );
    // console.log("own props contains ", props );
     console.log("state props contains ", auth );
  
    // component receives additionally:
    return { ownProps, auth }
  }
  export default connect(mapStateToProps, { postPlanResults })(PlanSubmit);