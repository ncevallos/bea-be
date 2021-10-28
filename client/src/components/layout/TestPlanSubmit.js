import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DisplayPlanResults from './DisplayPlanResults';
import DisplayMotivateResults from './DisplayMotivateResults';
import { postPlanResults } from '../../actions/postPlanResults';
// import { Link, Redirect } from 'react-router-dom';
// import axios from 'axios';
export const TestPlanSubmit = ({postPlanResults, user}) => {
  console.log("USer contains", user);
  console.log("user is found", user._id);
    // const [formData, setFormData] = useState({
    //     user: user._id,
    //     lastblockvisited: "this",
    //     howdoyoufeel: "is",
    //     howdoyoufeelint: 2,
    //     planjournal: "a",
    //     stayedontrack: "test",
    //     planbadblock: "",
    //     what2change: "",
    //     influencedeating: "",
    //     whathappened: "",
    //     somethingelsebad: "",
    //     plangoal: "",
    //     plangoal2: "",
    //     plangoal3: "",
    //     plangoal4: ""
    // });

    // // const { name, email, password, password2 } = formData;
    // const {
    //   lastblockvisited,
    //   howdoyoufeel,
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
    //   plangoal4
    // } = formData
  
    // const onChange = (e) =>
    //   setFormData({ ...formData, [e.target.name]: e.target.value });
  
    // const onSubmit = async (e) => {
    //   console.log('in on submit command');
    //   e.preventDefault();
    //   postPlanResults(
    //     formData
    //     // lastblockvisited,
    //     // howdoyoufeel,
    //     // planjournal,
    //     // stayedontrack,
    //     // planbadblock,
    //     // what2change,
    //     // influencedeating,
    //     // whathappened,
    //     // somethingelsebad,
    //     // plangoal,
    //     // plangoal2,
    //     // plangoal3,
    //     // plangoal4
    //   );
    //   console.log('in on submit command2', formData);
    //   // try {
    //   //   const config = {
    //   //     headers: {
    //   //       'Content-Type': 'application/json'
    //   //     }
    //   //   }
    //   //   const body = JSON.stringify(formData)
    //   //   const res = await axios.post('/api/planResults', body, config)
    //   // } catch(err){

    //   // }
    // };
  
  
    return (
  
                  <div className="block">
                      <div>
                          
                  <h1 className="large text-primary">Test submit information</h1>
                  <p className="lead">
                    {/* <i className="fas fa-user" /> This is a test submit form for backend work, if curious about what shows up 
                    check console in inspect mode. */}
                    This is a test page to display results from the Plan chat that have been completed by test user
                  </p>
                   {/* <form className="form" onSubmit={onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="HowDoYouFeel"
                        name="howdoyoufeel"
                        value={howdoyoufeel}
                        onChange={onChange}
                      />
                    </div> 
                    <input type="submit" className="btn btn-primary" value="Submit" />
                  </form> */}
                    <DisplayPlanResults userid={user._id}/>
                    <br/><br/>
                    <DisplayMotivateResults userid={user._id}/>
                </div>
                  </div>
    );
  };
  

  // export default TestPlanSubmit;
  TestPlanSubmit.propTypes = {
    user: PropTypes.object.isRequired
  };
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  });
  export default connect(mapStateToProps, { postPlanResults })(TestPlanSubmit);