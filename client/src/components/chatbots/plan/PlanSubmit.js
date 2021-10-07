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
        const res = await axios.post('/api/planResults', body, config)

        history.push('/PlanMain')
      } catch(err){
        console.log("In catch block");
      }
};
  return (
    <div>
      <div className="learning-options-container">
        <button
          className="learning-option-button"
          onClick={() => OnSubmit()}
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


// export default PlanSubmit;

// PlanSubmit.propTypes = {
//     user: PropTypes.object.isRequired
//   };
  // const mapStateToProps = (state, ownProps) => ({
  //   isAuthenticated: state.auth.isAuthenticated,
  //   user: state.auth.user
    
  // },
  // console.log("own props contains ", ownProps ),
  // console.log("state props contains ", state ));
  function mapStateToProps(state, ownProps) {
    const { auth } = state
    // ownProps would look like { "id" : 123 }
    // const { lastblockvisited,
    //   howdoyoufeel,
    //   howdoyoufeelint,
    //   planjournal,
    //   stayedontrack,
    //   planbadblock,
    //   what2change,
    //   influencedeating,
    //   whathappened,
    //   somethingelsebad,
    //   plangoal,
    //   plangoal2,
    //   plangoal3,
    //   plangoal4,
    //   plangoal5 } = ownProps
 
   console.log("own props contains ", ownProps );
    console.log("state props contains ", state );
    // console.log("own props contains ", props );
     console.log("state props contains ", auth );
  
    // component receives additionally:
    return { ownProps, auth }
  }
  export default connect(mapStateToProps, { postPlanResults })(PlanSubmit);