import React, { useEffect } from 'react'
import { format, compareAsc } from 'date-fns'
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getResultsById } from '../../actions/postPlanResults';

const DisplayPlanResults = ({ getResultsById, planResult: { planResults } }) => {
    useEffect(() => {
        getResultsById();
    }, [getResultsById]);
    console.log("plan results has", planResults);


    return (

                    <div className="block">
                        <div>
                            <h2>Plan Results</h2>
                            <table>
                                <thead>
                                <th>date</th>
                                <th>how do you feel</th>
                                <th>influenced eating</th>
                                <th>last block visited</th>
                                <th>something else bad</th>
                                <th>plan goal</th>
                                <th>plan goal 2</th>
                                <th>plan goal 3</th>
                                <th>plan goal 4</th>
                                <th>plan goal 5</th>
                                <th>plan journal</th>
                                <th>stayed on track</th>
                                <th>what to change</th></thead>
                                <tbody>

                                {planResults.map((planResult) => (

                                <tr key={planResult._id}>
                                    {/* <td>{format(planResult.date, 'MM/dd/yyyy')}</td> */}
                                    <td>{moment(planResult.date).format('MMMM Do YYYY, h:mm')}</td>
                                    <td>{planResult.howdoyoufeel}</td>
                                    <td>{planResult.influencedeating}</td>
                                    <td>{planResult.lastblockvisited}</td>
                                    <td>{planResult.somethingelsebad}</td>
                                    <td>{planResult.plangoal}</td>
                                    <td>{planResult.plangoal2}</td>
                                    <td>{planResult.plangoal3}</td>
                                    <td>{planResult.plangoal4}</td>
                                    <td>{planResult.plangoal5}</td>
                                    <td>{planResult.planjournal}</td>
                                    <td>{planResult.stayedontrack}</td>
                                    <td>{planResult.what2change}</td>
                                </tr>
                                ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
    )};
    
// PlanResults.propTypes = {
//     auth: PropTypes.object.isRequired
//   };
  
//   const mapStateToProps = (state) => ({
//     auth: state.auth
//   });
  
//   export default connect(mapStateToProps, { getResultsById })(PlanResults);
DisplayPlanResults.propTypes = {
    getResultsById: PropTypes.func.isRequired,
    planResult: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    planResult: state.planResult
  });
  
  export default connect(mapStateToProps, { getResultsById })(DisplayPlanResults);
// export default DisplayPlanResults;