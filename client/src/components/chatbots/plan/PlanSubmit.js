import React, { useState } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postPlanResults } from '../../../actions/postPlanResults';
import axios from 'axios';

import "./Options.css";

//this code is for once it is understood how to merge global and local props
// export const PlanSubmit = ({props, postPlanResults, user}) => {
//     console.log("USer contains", user);
//     console.log("user is found", user._id);



const PlanSubmit = (props) => {
  const { setState, actionProvider } = props;
  console.log("props in plan submit contains ", props);
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
    howdoyoufeel: props.howdoyoufeel,
    planjournal: props.planjournal,
    stayedontrack: props.stayedontrack,
    planbadblock: props.planbadblock,
    what2change: props.what2change,
    influencedeating: props.influencedeating,
    whathappened: props.whathappened,
    somethingelsebad: props.somethingelsebad,
    plangoal: props.plangoal,
    plangoal2: props.plangoal2,
    plangoal3: props.plangoal3,
    plangoal4: props.plangoal4,
    plangoal5: props.plangoal5
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
        const res = await axios.post('/api/planResults', body, config)
      } catch(err){
        console.log("In catch block");
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