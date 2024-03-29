import React from 'react'
import planIllustration from '../../img/plan-illustration.svg';
import arrowRight from '../../img/arrow-right.svg';
import PlanIconsDash from './plan/PlanIconsDash';
import { Link } from 'react-router-dom';


class PlanHeader extends React.Component {

    render() {
        let planHeader = "";
        console.log("plan header props has", this.props.results)
      if(this.props.results){
  
        planHeader = 

        <div style={{ backgroundImage: "url(" + planIllustration + "), linear-gradient(rgba(177, 201, 243, 0.9), rgba(173, 126, 227, 0.9), rgba(139, 99, 178, 0.9))" }} className="flex rounded-xl mb-3 bg-contain bg-no-repeat bg-right-bottom flex flex-col p-6">
        <div className="mb-4">
            <h3 className="text-sm leading-6 font-medium text-white uppercase font-black tracking-widest mb-1">
                Today's Plan
            </h3>                        
        </div>
          <div className="flex flex-row w-full justify-between">
          <div className="flex">
              <div className="flex flex-col w-48">
                  <div className="w-24 h-24 bg-gray-100 bg-opacity-50 rounded-3xl mb-2.5">
                      <PlanIconsDash msg={this.props.results.plangoal} />  
                  </div>
                  <div className="">
                      <h4 className="text-sm leading-6 font-medium text-white font-thin tracking-tight mb-1">
                          Main goal
                      </h4>
                      <h5 className="text-xl leading-6 font-medium text-white font-thin tracking-tight mb-1">
                      {this.props.results.plangoal} and {this.props.results.plangoal2}
                      </h5>
                  </div>
              </div>
          </div>
          <div className="flex w-48">
              <div className="flex flex-col">
                  <div className="w-24 h-24 bg-gray-100 bg-opacity-50 rounded-3xl mb-2.5">
                      <PlanIconsDash msg={this.props.results.plangoal5} />  
                  </div>
                  <div className="">
                      <h4 className="text-sm leading-6 font-medium text-white font-thin tracking-tight mb-1">
                        Your action
                      </h4>
                      <h5 className="text-xl leading-6 font-medium text-white font-thin tracking-tight mb-1">
                           {this.props.results.plangoal5}
                      </h5> 
                  </div>
              </div>                            
          </div>
          <div className="flex w-48 justify-end pr-10">
              
          <Link to='/PlanDaily'>
              <img src={arrowRight} alt="arrow right" className="w-24" /></Link>
          </div>
      </div>
      </div>
      }
      else {
        planHeader = 

        <div style={{ backgroundImage: "linear-gradient(rgba(177, 201, 243, 0.9), rgba(173, 126, 227, 0.9), rgba(139, 99, 178, 0.9))" }} className="flex rounded-xl mb-3 bg-contain bg-no-repeat bg-right-bottom flex flex-col p-6">
        <div className="mb-4">
            <h3 className="text-sm leading-6 font-medium text-white uppercase font-black tracking-widest mb-1">
                Today's Plan
            </h3>                        
        </div>
            <div className="flex flex-row w-full justify-between">
            <div className="flex">
                <div className="flex flex-col w-96">
                    <div className="">
                        <h4 className="text-xl leading-6 font-medium text-white font-thin tracking-tight mb-1">
                            It looks like you didn't create a plan for today.
                        </h4>
                        <h5 className="text-xl leading-6 font-medium text-white font-thin tracking-tight mb-1">
                        Chat with Bea now
                        </h5>
                    </div>
                </div>
            </div>
            <div className="flex w-48 justify-end pr-10">
                
            <Link to='/PlanDaily'>
                <img src={arrowRight} alt="arrow right" className="w-24" /></Link>
            </div>
        </div>
        </div>
      }
    console.log("plan mood header has this for props", this.props.results);
    return (
        <framgent>
        {planHeader}
        </framgent>


    )
  }
}



export default PlanHeader;