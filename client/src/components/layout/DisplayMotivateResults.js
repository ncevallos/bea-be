import React, { useEffect } from 'react'
import { format, compareAsc } from 'date-fns'
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getResultsById } from '../../actions/postMotivateResults';

const DisplayMotivateResults = ({ getResultsById, motivateResult: { motivateResults } }) => {
    useEffect(() => {
        getResultsById();
    }, [getResultsById]);
    console.log("plan results has", motivateResults);


    return (

                    <div className="block">
                        <div>
                            <h2>Motivate Results</h2>
                            <table>
                                <thead>
                                <th>date</th>
                                <th>tempted level</th>
                                <th>visualization type</th>
                                <th>last block visited</th>
                                <th>plan to eat</th>
                                <th>why hungry</th>
                                <th>over indulge result</th>
                                <th>plan phase feel</th>
                                <th>plan phase length</th>
                                <th>ie phase feel</th>
                                <th>ie phase length</th>
                                <th>fullness phase feel</th>
                                <th>fullness phase length</th>
                                <th>ae phase feel</th>
                                <th>ae phase length</th>
                                <th>mindful type</th>
                                <th>mindful result</th></thead>
                                <tbody>

                                {motivateResults.map((motivateResult) => (

                                <tr key={motivateResult._id}>
                                    {/* <td>{format(planResult.date, 'MM/dd/yyyy')}</td> */}
                                    <td>{moment(motivateResult.date).format('MMMM Do YYYY, h:mm')}</td>
                                    <td>{motivateResult.temptedlevel}</td>
                                    <td>{motivateResult.vistype}</td>
                                    <td>{motivateResult.lastblockvisited}</td>
                                    <td>{motivateResult.plan2eat}</td>
                                    <td>{motivateResult.whyhungry}</td>
                                    <td>{motivateResult.overindulgeresult}</td>
                                    <td>{motivateResult.planphasefeel}</td>
                                    <td>{motivateResult.planphaselength}</td>
                                    <td>{motivateResult.iephasefeel}</td>
                                    <td>{motivateResult.iephaselength}</td>
                                    <td>{motivateResult.fullphasefeel}</td>
                                    <td>{motivateResult.fullphaselength}</td>
                                    <td>{motivateResult.aefeel}</td>
                                    <td>{motivateResult.aelength}</td>
                                    <td>{motivateResult.mindfultype}</td>
                                    <td>{motivateResult.mindfulresult}</td>
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
DisplayMotivateResults.propTypes = {
    getResultsById: PropTypes.func.isRequired,
    motivateResult: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    motivateResult: state.motivateResult
  });
  
  export default connect(mapStateToProps, { getResultsById })(DisplayMotivateResults);
// export default DisplayPlanResults;