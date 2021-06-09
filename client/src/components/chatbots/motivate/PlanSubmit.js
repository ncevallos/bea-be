import React, { useState } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postMotivateResults } from '../../../actions/postMotivateResults';
import axios from 'axios';

import "./AreyouReady.css";

//this code is for once it is understood how to merge global and local props
// export const PlanSubmit = ({props, postPlanResults, user}) => {
//     console.log("USer contains", user);
//     console.log("user is found", user._id);



const PlanSubmit = (props) => {
  const { setState, actionProvider } = props;
  console.log("props in motivate submit contains ", props);
//   console.log("plan goal2 contains ", props.plangoal2);
//   console.log("Spread state operator", ...state)
//   const setType1 = async (type) => {
//     setState((state) => ({
//       ...state,
//       plangoal: type,
//       lastblockvisited: "Plan Goal"
//     }));

//     actionProvider.smallerportions();
//   };
//   const setType2 = async (type) => {
//     setState((state) => ({
//       ...state,
//       plangoal: type,
//       lastblockvisited: "Plan Goal"
//     }));

//     actionProvider.foodchoices();
//   };
    console.log("current entry state contains", props);
  const [formData, setFormData] = useState({
    user: "60217a517f2b961147d214f0",
    // user: user._id,

    lastblockvisited: props.lastblockvisited,
    temptedlevel: props.temptedlevel,
    vistype: props.vistype,
    plan2eat: props.plan2eat, //open ended
    whyhungry: props.whyhungry,
    overindulgeresult: props.overindulgeresult, //possibly open ended
    differentchoice: props.differentchoice,
    differentchoice2: props.differentchoice2,
    planphasefeel: props.planphasefeel,
    planphaselength: props.planphaselength,
    iephasefeel: props.iephasefeel,
    iephaselength: props.iephaselength,
    fullphasefeel: props.fullphasefeel,
    fullphaselength: props.fullphaselength,
    aefeel: props.aefeel,
    aelength: props.aelength,
    mindfultype: props.mindfultype,
});
const onSubmit = async (e) => {
    console.log('in on submit command');


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
        const res = await axios.post('/api/motivateResults', body, config)
      } catch(err){
        console.log("In catch block");
        console.log("error contains ", err);
      }
};
  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => onSubmit()}
        >
          I'm Finished!
        </button>
        {/* <button
          className="learning-option-button"
          onClick={() => setType2("Different foods")}
        >
          I'm Finished!
        </button> */}
      </div>
    </div>
  );
};


export default PlanSubmit;

// PlanSubmit.propTypes = {
//     user: PropTypes.object.isRequired
//   };
//   const mapStateToProps = (state, ownProps) => ({
//     isAuthenticated: state.auth.isAuthenticated,
//     user: state.auth.user
    
//   });
//   export default connect(mapStateToProps, { postPlanResults })(PlanSubmit);