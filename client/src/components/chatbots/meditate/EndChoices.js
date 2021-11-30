import React, { useState } from "react";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postMeditateResults } from '../../../actions/meditateResults';
import axios from 'axios';

import "./AreyouReady.css";

//this code is for once it is understood how to merge global and local props
export const EndChoices = ({props, postMeditateResults, state, auth, ownProps}) => {
    //  console.log("USer contains", auth.user);
    //  console.log("user is found", auth.user._id);
     let history = useHistory();
  // console.log("own props in plan submit contains ", ownProps);
  // console.log("auth in plan submit contains ", auth);
  const [formData] = useState({
    //user: "60217a517f2b961147d214f0",
    user: auth.user._id,
    videoid: ownProps.videoplayedid,
    videotitle: ownProps.videoplayedtitle,
});
const onSubmit = async (goto) => {
    console.log('in on submit command');

          try {
              console.log("In try block");
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        const body = JSON.stringify(formData)
        const res = await axios.post('/api/meditateResults', body, config)
        if(goto === "dashboard"){
          history.push('/Meditate')

        }
        else if(goto === "activity"){

          // history.push('/PlanMain')
          ownProps.actionProvider.otheractivity();
        }
        else if(goto === "endSesh"){
          ownProps.actionProvider.endBlocks();
        }
        else {
          history.push('/Meditate')

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
          onClick={() => onSubmit("dashboard")}
        >
          Visit Dashboard
        </button>
        <button
          className="learning-option-button"
          id="activity"
          onClick={() => onSubmit("activity")}
        >
          Do another Activity
        </button>
        <button
          id="endSesh"
          className="learning-option-button"
          onClick={() => onSubmit("endSesh")}
        >
          End Session
        </button>
      </div>
    </div>
  );
};

  // console.log("state props contains ", state ));
  function mapStateToProps(state, ownProps) {
    const { auth } = state
 
  //  console.log("own props contains ", ownProps );
  //   console.log("state props contains ", state );
  //    console.log("state props contains ", auth );
  
    // component receives additionally:
    return { ownProps, auth }
  }
  export default connect(mapStateToProps, { postMeditateResults })(EndChoices);