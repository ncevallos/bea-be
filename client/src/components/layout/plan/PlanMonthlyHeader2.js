import React, { Fragment } from 'react'
// import { getSummary } from '../../../actions/postPlanResults';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import PlanIconsSmall from './PlanIconsSmall';
import PlanLineGraph from './PlanLineGraph';
import PlanSmiley from './PlanSmiley';
import PlanIcons from './PlanIcons';
import heartIcon from '../../../img/heart-icon.svg';
import PlanLineGraph45 from './PlanLineGraph45';
import PlanLineGraph2 from './PlanLineGraph2';


class PlanMonthlyHeader2 extends React.Component {

render() {
    let planResults2 = this.props.planResults2;
      console.log("plan monthly header results has", planResults2);

    let planBodyResults = "";
    if(planResults2.summaryStats){
    
        planBodyResults = 
          <Fragment>
            {/* <div className="mb-gutter"><PlanLineGraph data={planResults2.dates[0]} values={planResults2.values[0]} /></div> */}
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 mb-gutter">
                 <div className="flex flex-col text-center bg-white rounded-xl border border-gray-400 p-4">
                    <div className="flex flex-row w-full justify-between mb-gutter">
                        <div className="w-8"><PlanSmiley mood="Good" /></div>
                        <div className="font-bold">{planResults2.summaryStats.stayedontrackpct}%</div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex-1 flex flex-col items-start text-left">
                            {/* <span className="mt-6 p-3 bg-beaLightBlue rounded-3xl flex items-center justify-center">
                                <img src={bowlIcon} alt="Bowl Icon" className="w-11" />
                            </span>
                            <h2 className="mt-0 text-gray-700 text-3xl font-light">{planResults2.summaryStats.favgoalpct}%</h2> */}
                            <span className="text-sm leading-snug">You felt</span>
                            <span className="text-2xl leading-snug mb-2.5">Pretty Good</span>
                            {/* <div className="flex flex-row items-center mb-0.5">
                                <div className="w-3 h-3 bg-beaOrange rounded-full mr-1.5"></div>
                                <span className="text-sm leading-snug text-gray-600"><strong>{planResults2.summaryStats.great}%</strong> Great</span>
                            </div>
                            <div className="flex flex-row items-center mb-0.5">
                                <div className="w-3 h-3 bg-beaYellow rounded-full mr-1.5"></div>
                                <span className="text-sm leading-snug text-gray-600"><strong>{planResults2.summaryStats.good}%</strong> Good</span>
                            </div>
                            <div className="flex flex-row items-center mb-0.5">
                                <div className="w-3 h-3 bg-beaDarkBlue rounded-full mr-1.5"></div>
                                <span className="text-sm leading-snug text-gray-600"><strong>{planResults2.summaryStats.notgood}%</strong> Not Good</span>
                            </div>
                            <div className="flex flex-row items-center mb-3">
                                <div className="w-3 h-3 bg-beaBlueGreen rounded-full mr-1.5"></div>
                                <span className="text-sm leading-snug text-gray-600"><strong>{planResults2.summaryStats.horrible}%</strong> Horrible</span>
                            </div> */}

                            <div className="flex flex-row items-center mb-1.5">
                                <div className="flex flex-none rounded-2xl bg-beaLightBlue p-2.5">
                                    <img src={heartIcon} alt="Heart Icon" className="w-5" />
                                </div>
                                <div className="ml-2.5 flex-1 md:flex md:justify-between">
                                    <p className="text-sm text-gray-500 mb-0 leading-snug">
                                        <strong>{planResults2.summaryStats.stayedontrack}</strong><br/>helped you stay on track
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="flex flex-col text-center bg-white rounded-xl border border-gray-400 p-4">
                    <div className="flex flex-row w-full justify-between mb-gutter">
                        <div className="w-8"><PlanIcons msg={planResults2.summaryStats.favgoal2} /></div>
                        <div className="font-bold">{planResults2.summaryStats.favgoal2pct}%</div>
                    </div>

                    <div className="flex-1 flex flex-col items-start text-left">
                        <span className="text-sm leading-medium">Favorite goal</span>
                        <span className="font-bold text-gray-500 text-sm leading-medium">{planResults2.summaryStats.favgoal2}</span>
                    </div>
                </div>
                <div className="flex flex-col text-center bg-white rounded-xl border border-gray-400 p-4">
                    <div className="flex flex-row w-full justify-between mb-gutter">
                        <div className="w-8"><PlanIcons msg={planResults2.summaryStats.favaction} /></div>
                        <div className="font-bold">{planResults2.summaryStats.favactionpct}%</div>
                    </div>
                    <div className="flex-1 flex flex-col items-start text-left">
                        <span className="text-sm leading-medium">Favorite action to curb cravings</span>
                        <h2 className="mt-0 text-gray-700 text-xl font-medium mb-0 leading-medium">{planResults2.summaryStats.favaction}</h2>
                    </div>
                </div>
            </div>
          </Fragment>
    }
    else {
        planBodyResults = 
          <Fragment><div>Loading</div></Fragment>
  
    }
    
    return (
        <Fragment>

            {planBodyResults}
        </Fragment>
    )
}
}

  export default PlanMonthlyHeader2;