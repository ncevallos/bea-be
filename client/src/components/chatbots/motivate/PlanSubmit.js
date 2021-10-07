import React, { useState } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { postMotivateResults } from '../../../actions/postMotivateResults';
import axios from 'axios';

import "./AreyouReady.css";

//this code is for once it is understood how to merge global and local props
// export const PlanSubmit = ({props, postPlanResults, user}) => {
//     console.log("USer contains", user);
//     console.log("user is found", user._id);



// const PlanSubmit = (props) => {
//   const { setState, actionProvider } = props;
//   console.log("props in motivate submit contains ", props);
  export const PlanSubmit = ({ postMotivateResults, auth, ownProps}) => {
    console.log("USer contains", auth.user);
    console.log("user is found", auth.user._id);
    let history = useHistory();

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
    console.log("current entry state contains", ownProps);
  const [formData, setFormData] = useState({
   // user: "60217a517f2b961147d214f0",
    // user: user._id,

    user: auth.user._id,
    lastblockvisited: ownProps.lastblockvisited,
    temptedlevel: ownProps.temptedlevel,
    temptedlevelint: ownProps.temptedlevelint,
    vistype: ownProps.vistype,
    plan2eat: ownProps.plan2eat, //open ended
    whyhungry: ownProps.whyhungry,
    overindulgeresult: ownProps.overindulgeresult, //possibly open ended
    differentchoice: ownProps.differentchoice,
    differentchoice2: ownProps.differentchoice2,
    planphasefeel: ownProps.planphasefeel,
    planphaselength: ownProps.planphaselength,
    planphaseint: ownProps.planphaseint,
    iephasefeel: ownProps.iephasefeel,
    iephaselength: ownProps.iephaselength,
    iephaseint: ownProps.iephaseint,
    fullphasefeel: ownProps.fullphasefeel,
    fullphaselength: ownProps.fullphaselength,
    fullphaseint: ownProps.fullphaseint,
    aefeel: ownProps.aefeel,
    aelength: ownProps.aelength,
    aeint: ownProps.aeint,
    mindfultype: ownProps.mindfultype,
    mindfultype2: ownProps.mindfultype2,
});
const OnSubmit = async (e) => {
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
        history.push('/MotivateMain')
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
          onClick={() => OnSubmit()}
        >
          Go to Dashboard
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


// export default PlanSubmit;

// PlanSubmit.propTypes = {
//     user: PropTypes.object.isRequired
//   };
//   const mapStateToProps = (state, ownProps) => ({
//     isAuthenticated: state.auth.isAuthenticated,
//     user: state.auth.user
    
//   });
//   export default connect(mapStateToProps, { postPlanResults })(PlanSubmit);


function mapStateToProps(state, ownProps) {
  const { auth } = state;
  console.log("auth contains ", auth);

  console.log("ownprops contains ", ownProps);
  return { ownProps, auth }
}
export default connect(mapStateToProps, { postMotivateResults })(PlanSubmit);