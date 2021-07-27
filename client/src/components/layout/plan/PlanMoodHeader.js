import React from 'react'
import smileyIcon from '../../../img/smiley-icon.svg';
import smileyIconExtraHappy from '../../../img/smiley-icon-extrahappy.svg';
import smileyIconNeutral from '../../../img/smiley-icon-neutral.svg';
import smileyIconUnhappy from '../../../img/smiley-icon-unhappy.svg';
import smileyIconRound from '../../../img/smiley-icon-round.svg';
import differentFoods from '../../../img/planimgs/different-foods.png';
import meditate from '../../../img/planimgs/meditate.png';
import read from '../../../img/planimgs/read.png';
import smallerAmounts from '../../../img/planimgs/smaller-amounts.png';
import noEntry from '../../../img/planimgs/no-entry.png';
import { Fragment } from 'react';

class PlanMoodHeader extends React.Component {

    render() {
        console.log("props has", this.props);
        let control = this.props.avgMood;
        let planmood = "";
      if(control === 3){

        planmood = 
            <div className="bg-beaYellow plan-interactive-state">
            <div className="sm:p-6 flex-grow">
                <h3 className="text-2xl leading-6 font-medium text-white">
                    Keep up the good work!
                </h3>
                <div className="mt-2 max-w-xl text-md text-white">
                <p>
                    Your mood eating has on average been great for the past 30 days.
                </p>
                </div>
                <div className="mt-5">
                    <button type="button" className="btn-white">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>       
                        Stay on Track Tips
                    </button>
                </div>
            </div>
            <div className="flex pr-10 align-middle">
                <img src={smileyIconExtraHappy} alt="Extra Happy Smiley" className="w-36" />
            </div>
        </div>
      }
      else if(control === 2){
  
        planmood = 
          <div className="bg-beaOrange plan-interactive-state">
          <div className="sm:p-6 flex-grow">
              <h3 className="text-2xl leading-6 font-medium text-white">
                  Keep up the good work!
              </h3>
              <div className="mt-2 max-w-xl text-md text-white">
              <p>
                  Your mood eating has on average been pretty good for the past 30 days.
              </p>
              </div>
              <div className="mt-5">
                  <button type="button" className="btn-white">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>       
                      Stay on Track Tips
                  </button>
              </div>
          </div>
          <div className="flex pr-10 align-middle">
              <img src={smileyIcon} alt="Smiley Icon" className="w-36" />
          </div>
      </div>
      }
      else if(control === 1){
  
        planmood = 
            <div className="bg-beaBlueGreen plan-interactive-state">
            <div className="sm:p-6 flex-grow">
                <h3 className="text-2xl leading-6 font-medium text-white">
                    Keep up the good work!
                </h3>
                <div className="mt-2 max-w-xl text-md text-white">
                <p>
                    Your mood eating has on average been not good for the past 30 days.
                </p>
                </div>
                <div className="mt-5">
                    <button type="button" className="btn-white">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>       
                        Getting Back on Track Tips
                    </button>
                </div>
            </div>
            <div className="flex pr-10 align-middle">
                <img src={smileyIconNeutral} alt="Neutral Smiley Face" className="w-36" />
            </div>
        </div>
      }
      else if(control === 0){
        planmood = 
          <div className="bg-beaDarkBlue plan-interactive-state">
          <div className="sm:p-6 flex-grow">
              <h3 className="text-2xl leading-6 font-medium text-white">
                  Keep up the good work!
              </h3>
              <div className="mt-2 max-w-xl text-md text-white">
              <p>
                  Your mood eating has on average been horrible for the past 30 days.
              </p>
              </div>
              <div className="mt-5">
                  <button type="button" className="btn-white">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>       
                      Getting Back on Track Tips
                  </button>
              </div>
          </div>
          <div className="flex pr-10 align-middle">
              <img src={smileyIconUnhappy} alt="Unhappy Smiley Icon" className="w-36" />
          </div>
      </div>
      }
      else {
        planmood = 
          <div className="bg-gradient-to-r from-beaLightBlue to-gray-50 plan-interactive-state">
          <div className="sm:p-6 flex-grow">
              <h3 className="text-2xl leading-6 font-thin text-gray-700">
                  Get your mood eating trends
              </h3>
              <div className="mt-2 max-w-xl text-md text-gray-700 font-light">
              <p>
                  When you upgrade you’ll unlock access to all your data which will help keep you on track.
              </p>
              </div>
              <div className="mt-5">
                  <button type="button" className="btn-darkPurple">       
                      Upgrade Today
                  </button>
              </div>
          </div>
      </div>
      }

    return (
        // different colors are as follow
        // bg-beaYellow = <img src={smileyIconExtraHappy} alt="Extra Happy Smiley" className="w-36" />
        // bg-beaOrange = <img src={smileyIcon} alt="Smiley Icon" className="w-36" />
        // bg-beaBlueGreen =  <img src={smileyIconNeutral} alt="Neutral Smiley Face" className="w-36" />
        // bg-beaDarkBlue = <img src={smileyIconUnhappy} alt="Unhappy Smiley Icon" className="w-36" />
    //     <div className="bg-beaYellow plan-interactive-state">
    //     <div className="sm:p-6 flex-grow">
    //         <h3 className="text-2xl leading-6 font-medium text-white">
    //             Keep up the good work!
    //         </h3>
    //         <div className="mt-2 max-w-xl text-md text-white">
    //         <p>
    //             Your mood eating has on average been great for the past 30 days.
    //         </p>
    //         </div>
    //         <div className="mt-5">
    //             <button type="button" className="btn-white">
    //                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>       
    //                 Stay on Track Tips
    //             </button>
    //         </div>
    //     </div>
    //     <div className="flex pr-10 align-middle">
    //         <img src={smileyIconExtraHappy} alt="Extra Happy Smiley" className="w-36" />
    //     </div>
    // </div>]
    <Fragment>  {planmood}
    </Fragment>


    )
  }
}



export default PlanMoodHeader;